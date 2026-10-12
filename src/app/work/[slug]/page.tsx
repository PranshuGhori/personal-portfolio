import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CATEGORY_LABELS, caseStudies, getCaseStudy } from "@/content/public";
import { StatusBadge } from "@/components/ui/status-badge";
import { FlowDiagram } from "@/components/work/flow-diagram";
import { Example } from "@/components/work/examples";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} — Pranshu Ghori`,
      description: study.summary,
      url: `/work/${study.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title: study.title, description: study.summary },
  };
}

function Block({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "");
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-line py-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:py-14">
      <h2 id={id} className="eyebrow pt-1 text-ink">
        {n} — {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Dashes({ items }: { items: string[] }) {
  return (
    <ul className="max-w-[68ch] space-y-3 text-ink-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="text-muted">—</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 4);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="shell py-14 md:py-20">
      <nav aria-label="Breadcrumb">
        <Link href="/work" className="eyebrow inline-flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={13} aria-hidden="true" /> All work
        </Link>
      </nav>

      <header className="mt-10 grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
        <p className="eyebrow pt-2 text-ink">
          Case study {String(index + 1).padStart(2, "0")}
        </p>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={study.status} />
            {study.categories.map((c) => (
              <span key={c} className="tag">
                {CATEGORY_LABELS[c]}
              </span>
            ))}
          </div>
          <h1 className="display case-title mt-6 max-w-[18ch] text-ink">{study.title}</h1>
          <p className="display mt-5 max-w-[30ch] text-[1.5rem] italic leading-snug text-ink-2 md:text-[1.75rem]">
            {study.headline}
          </p>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] text-ink-2">{study.summary}</p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
            <div className="bg-card p-4">
              <dt className="eyebrow text-muted">Role</dt>
              <dd className="mt-1 text-sm text-ink">Data Science Co-op</dd>
            </div>
            <div className="bg-card p-4">
              <dt className="eyebrow text-muted">Period</dt>
              <dd className="mt-1 text-sm text-ink">{study.period}</dd>
            </div>
            <div className="bg-card p-4">
              <dt className="eyebrow text-muted">Status</dt>
              <dd className="mt-1 text-sm text-ink">{study.status.label}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mt-16">
        <Block n="01" label="My contribution">
          <p className="display max-w-[34ch] text-[1.6rem] leading-snug text-ink md:text-[1.9rem]">{study.contribution}</p>
        </Block>

        <Block n="02" label="Problem and context">
          <div className="max-w-[66ch] space-y-4 text-ink-2">
            {study.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 rounded-md border border-line bg-card p-5 md:p-6">
            <FlowDiagram id={study.diagram} />
          </div>
        </Block>

        <Block n="03" label="Approach and key decisions">
          <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
            {study.decisions.map((d, i) => (
              <li key={d.title} className="bg-card p-5 md:p-6 md:odd:last:col-span-2">
                <p className="eyebrow text-muted">Decision {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-2 text-[1.45rem] leading-tight text-ink">{d.title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-2">{d.body}</p>
              </li>
            ))}
          </ol>
          {study.example && (
            <div className="mt-10">
              <Example id={study.example} />
            </div>
          )}
        </Block>

        <Block n="04" label="Evaluation and evidence">
          <p className="max-w-[62ch] text-ink-2">{study.evaluation.intro}</p>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {study.evaluation.items.map((e) => (
              <div key={e.title} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] sm:gap-6">
                <dt className="font-medium text-ink">{e.title}</dt>
                <dd className="text-[0.95rem] text-ink-2">{e.body}</dd>
              </div>
            ))}
          </dl>
          {study.publicMetrics.length > 0 && (
            <dl className="mt-6 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
              {study.publicMetrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse bg-card p-4">
                  <dt className="eyebrow mt-1 text-muted">{m.label}</dt>
                  <dd className="display text-[1.8rem] text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </Block>

        <Block n="05" label="What shipped">
          <div className="max-w-[66ch] space-y-4 text-ink-2">
            {study.outcome.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {study.subwork.length > 0 && (
            <ul className="mt-8 divide-y divide-line rounded-md border border-line bg-card">
              {study.subwork.map((w) => (
                <li key={w.title} className="grid gap-2 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                  <div>
                    <h3 className="font-medium text-ink">{w.title}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink-2">{w.body}</p>
                  </div>
                  <StatusBadge status={w.status} className="justify-self-start" />
                </li>
              ))}
            </ul>
          )}
        </Block>

        <Block n="06" label="Limitations and lessons">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow mb-4 text-muted">Limitations</h3>
              <Dashes items={study.limitations} />
            </div>
            <div>
              <h3 className="eyebrow mb-4 text-muted">Lessons</h3>
              <Dashes items={study.lessons} />
            </div>
          </div>
        </Block>

        <Block n="07" label="Tools">
          <ul className="flex flex-wrap gap-1.5">
            {study.tools.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <footer className="border-t border-line pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/work" className="pill">
            <ArrowLeft size={13} aria-hidden="true" /> All work
          </Link>
          <Link href={`/work/${next.slug}`} className="pill pill-solid">
            Next: {next.title} <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <h2 className="eyebrow mt-14 text-ink">Related studies</h2>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {related.map((r) => (
            <li key={r.slug} className="bg-card">
              <Link href={`/work/${r.slug}`} className="group block p-5 hover:bg-paper-2">
                <p className="eyebrow text-muted">{r.categories.map((c) => CATEGORY_LABELS[c]).join(" / ")}</p>
                <p className="display mt-2 text-[1.4rem] leading-tight text-ink group-hover:underline group-hover:decoration-line-strong group-hover:underline-offset-4">
                  {r.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
