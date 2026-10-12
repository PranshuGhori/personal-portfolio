// Content-safety and content-shape checks. Run with `npm test` (Node 22.18+, no extra dependencies).
//
// 1. The public content module has the shape the pages rely on.
// 2. Employer case studies carry no numbers (metrics, counts, thresholds) unless approved.
// 3. Generic leak patterns (internal paths, PR references, credentials, unexpected links) never appear.
// 4. Optional: terms listed in the gitignored `.content-denylist.local` never appear in source or build output.

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import {
  caseStudies,
  experience,
  flagshipEvidence,
  companyWorkNote,
  projects,
  profile,
  toolkit,
} from "../src/content/public.ts";

const ROOT = new URL("..", import.meta.url).pathname;

function walk(dir, exts) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p, exts));
    else if (!exts || exts.includes(extname(p))) out.push(p);
  }
  return out;
}

const SLUGS = [
  "credit-risk-modeling",
  "entity-resolution",
  "public-business-data-pipeline",
  "credit-data-quality-benchmarking",
  "customer-product-analytics",
];

test("all five case studies exist with the fields every page renders", () => {
  assert.deepEqual(caseStudies.map((s) => s.slug).sort(), [...SLUGS].sort());
  for (const s of caseStudies) {
    assert.ok(s.title && s.summary && s.contribution, `${s.slug}: title/summary/contribution`);
    assert.ok(s.status?.label, `${s.slug}: explicit status`);
    assert.ok(s.categories.length > 0, `${s.slug}: categories`);
    assert.ok(s.context.length > 0 && s.decisions.length > 0, `${s.slug}: context and decisions`);
    assert.ok(s.evaluation.items.length > 0, `${s.slug}: evaluation`);
    assert.ok(s.limitations.length > 0, `${s.slug}: limitations`);
  }
});

test("employer metrics stay empty unless explicitly approved", () => {
  for (const s of caseStudies) {
    for (const m of s.publicMetrics) {
      assert.equal(m.approvedForPublic, true, `${s.slug}: unapproved metric ${m.label}`);
    }
  }
});

test("employer content contains no numbers", () => {
  const employerText = [
    // `period` (a year) and approved `publicMetrics` are the only places numbers may appear.
    ...caseStudies.map((s) => JSON.stringify(s, (k, v) => (k === "period" || k === "publicMetrics" ? undefined : v))),
    JSON.stringify(experience[0].points),
    experience[0].summary,
    ...flagshipEvidence,
    companyWorkNote,
  ];
  for (const text of employerText) {
    const hit = text.match(/\d/);
    assert.equal(hit, null, `digit found in employer content near: "${hit && text.slice(Math.max(0, hit.index - 40), hit.index + 20)}"`);
  }
});

test("research and shipped work are labelled separately where both exist", () => {
  for (const slug of ["credit-risk-modeling", "entity-resolution"]) {
    const s = caseStudies.find((c) => c.slug === slug);
    const kinds = new Set(s.subwork.map((w) => w.status.kind));
    assert.ok(kinds.has("shipped") && kinds.has("research"), `${slug}: needs both shipped and research sub-work`);
  }
});

const GENERIC_LEAKS = [
  [/\bPR\s*#\s*\d+/i, "pull request reference"],
  [/pull request/i, "pull request reference"],
  [/\/Users\/|[A-Z]:\\\\/, "local file path"],
  [/\.server\.tsx?\b/, "internal source file name"],
  [/\bmigration\s*\d+/i, "migration reference"],
  [/\.(ipynb|parquet|xlsx|jsonl|erd)\b/i, "internal data file"],
  [/\b(api[_-]?key|secret|password|bearer\s+[a-z0-9])/i, "credential-like text"],
  [/production[- ]grade|production[- ]ready/i, "unsupported production claim"],
];

test("public content has no generic leak patterns", () => {
  const blob = JSON.stringify({ caseStudies, experience, projects, profile, toolkit, flagshipEvidence });
  for (const [re, what] of GENERIC_LEAKS) {
    assert.doesNotMatch(blob, re, `found ${what}`);
  }
});

test("external links only point to verified public destinations", () => {
  const blob = JSON.stringify({ caseStudies, experience, projects, profile, toolkit });
  const urls = blob.match(/https?:\/\/[^\s"')]+/g) ?? [];
  for (const u of urls) {
    assert.match(u, /^https:\/\/(github\.com\/PranshuGhori(\/|$)|www\.linkedin\.com\/in\/pranshughori$)/, `unexpected link ${u}`);
  }
  for (const p of projects) {
    assert.notEqual(p.repo, profile.links.github, `${p.title}: points at the profile, not a repository`);
  }
});

const denylistPath = join(ROOT, ".content-denylist.local");
const denylist = existsSync(denylistPath)
  ? readFileSync(denylistPath, "utf8")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"))
  : [];

function assertNoDenylisted(files, where) {
  for (const f of files) {
    const text = readFileSync(f, "utf8").toLowerCase();
    for (const term of denylist) {
      assert.ok(!text.includes(term.toLowerCase()), `private term found in ${where}: ${f.replace(ROOT, "")}`);
    }
  }
}

test("source tree contains no locally denylisted terms", { skip: denylist.length === 0 && "no .content-denylist.local" }, () => {
  const files = [
    ...walk(join(ROOT, "src")),
    ...walk(join(ROOT, "public"), [".txt", ".json", ".svg", ".md", ".xml"]),
    ...walk(join(ROOT, "tests")),
    join(ROOT, "README.md"),
  ];
  assertNoDenylisted(files, "source");
});

const builtApp = join(ROOT, ".next", "server", "app");
test("build output contains no locally denylisted terms or application source maps", { skip: (!existsSync(builtApp) || denylist.length === 0) && "no build output or denylist" }, () => {
  const staticDir = join(ROOT, ".next", "static");
  const files = walk(builtApp, [".html", ".rsc", ".body", ".meta", ".json", ".js"]);
  assert.ok(files.length > 0, "expected built pages");
  assertNoDenylisted([...files, ...walk(staticDir, [".js", ".css"])], "build output");
  // Next ships a map for its own polyfill; fail only if application source is exposed.
  for (const m of walk(staticDir, [".map"])) {
    const { sources = [] } = JSON.parse(readFileSync(m, "utf8"));
    const appSources = sources.filter((s) => /(^|\/)src\//.test(s));
    assert.deepEqual(appSources, [], `browser source map exposes application source: ${m.replace(ROOT, "")}`);
  }
});
