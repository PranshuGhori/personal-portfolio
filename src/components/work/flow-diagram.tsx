import { ArrowDown, ArrowRight } from "lucide-react";
import type { DiagramId } from "@/content/public";
import { cn } from "@/lib/utils";

type Step = { label: string; note: string };
type Outcome = { label: string; note: string; tone: "accent" | "research" | "muted" };

type Diagram = {
  title: string;
  steps: Step[];
  outcomes?: Outcome[];
  after?: Step;
  caption: string;
};

/** Generic, simplified diagrams. They describe the shape of the work, not a production topology. */
export const DIAGRAMS: Record<DiagramId, Diagram> = {
  "credit-pipeline": {
    title: "From public filings to a tested score",
    steps: [
      { label: "Public filings", note: "Filter to business entities" },
      { label: "Normalize + link", note: "Staged name matching; confident links only" },
      { label: "Enrich", note: "Attach business records" },
      { label: "Screen signals", note: "Direction, discrimination, leakage" },
      { label: "Regularized model", note: "Percentile-binned inputs" },
      { label: "Reference examples", note: "Python ↔ TypeScript parity" },
    ],
    caption: "Simplified flow. Each stage was evaluated before the next consumed its output.",
  },
  "entity-resolution": {
    title: "From one search to one confident answer",
    steps: [
      { label: "Search", note: "Name + location" },
      { label: "Candidates", note: "From several providers" },
      { label: "Normalize", note: "One neutral record shape" },
      { label: "Compare", note: "Field similarity + conflict rules" },
    ],
    outcomes: [
      { label: "Link", note: "Clear evidence", tone: "accent" },
      { label: "Review", note: "Close or partial", tone: "research" },
      { label: "No link", note: "Conflict or weak name", tone: "muted" },
    ],
    after: { label: "User confirms", note: "Server accepts only offered candidates" },
    caption: "Simplified flow. Every outcome carries a readable decision trail.",
  },
  "data-layers": {
    title: "Layered processing with provenance",
    steps: [
      { label: "Raw", note: "Immutable, dated snapshots" },
      { label: "Staging", note: "Typed, source-shaped" },
      { label: "Normalized", note: "One canonical schema" },
      { label: "Identity", note: "Deterministic, then probabilistic links" },
      { label: "Golden record", note: "Fields with provenance" },
      { label: "Export + warehouse", note: "Parquet, queryable views" },
    ],
    caption: "Simplified architecture. Any output can be rebuilt from the raw layer.",
  },
  "quality-flow": {
    title: "From a large file to a readable score",
    steps: [
      { label: "Seeded sample", note: "One streaming pass" },
      { label: "Fill rates", note: "Nulls, placeholders, zeros" },
      { label: "Distributions", note: "Shape, heaping, tails" },
      { label: "Cross-source", note: "Rank-based agreement" },
      { label: "Display", note: "Midrank percentiles + templates" },
    ],
    caption: "Simplified flow of the audit and the display work it informed.",
  },
  "analytics-flow": {
    title: "From transactions to recommendations",
    steps: [
      { label: "Define grain", note: "Order, line, or pull" },
      { label: "Query", note: "Joins, distinct counts, buckets" },
      { label: "Reconcile", note: "Across systems" },
      { label: "Automate", note: "Repeatable Python scripts" },
      { label: "Write up", note: "Findings, caveats, recommendations" },
    ],
    caption: "Simplified flow of the analysis.",
  },
};

const TONES: Record<Outcome["tone"], string> = {
  accent: "border-accent/40 bg-accent-soft text-accent",
  research: "border-research/40 bg-research-soft text-research",
  muted: "border-line-strong bg-paper-2 text-ink-2",
};

function Box({ step, onPanel }: { step: Step; onPanel?: boolean }) {
  return (
    <div
      className={cn(
        "flex-1 rounded-md border px-3.5 py-3",
        onPanel ? "border-panel-line bg-panel-2" : "border-line-strong bg-card",
      )}
    >
      <p className={cn("font-mono text-[0.7rem] uppercase tracking-[0.12em]", onPanel ? "text-panel-ink" : "text-ink")}>
        {step.label}
      </p>
      <p className={cn("mt-1 text-[0.8rem] leading-snug", onPanel ? "text-panel-muted" : "text-muted")}>{step.note}</p>
    </div>
  );
}

function Arrow({ onPanel }: { onPanel?: boolean }) {
  const c = onPanel ? "text-panel-muted" : "text-line-strong";
  return (
    <span aria-hidden="true" className={cn("flex items-center justify-center", c)}>
      <ArrowDown size={14} className="lg:hidden" />
      <ArrowRight size={14} className="hidden lg:block" />
    </span>
  );
}

export function FlowDiagram({ id, onPanel = false }: { id: DiagramId; onPanel?: boolean }) {
  const d = DIAGRAMS[id];
  const muted = onPanel ? "text-panel-muted" : "text-muted";
  return (
    <figure className="w-full">
      <p className={cn("mb-3 font-mono text-[0.68rem] uppercase tracking-[0.12em]", muted)}>{d.title}</p>
      <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {d.steps.map((s, i) => (
          <li key={s.label} className="flex min-w-0 flex-col items-stretch gap-2 lg:flex-1 lg:flex-row">
            <Box step={s} onPanel={onPanel} />
            {i < d.steps.length - 1 && <Arrow onPanel={onPanel} />}
          </li>
        ))}
      </ol>

      {d.outcomes && (
        <div className="mt-2">
          <span aria-hidden="true" className={cn("flex justify-center py-1", onPanel ? "text-panel-muted" : "text-line-strong")}>
            <ArrowDown size={14} />
          </span>
          <ul className="grid gap-2 sm:grid-cols-3" aria-label="Possible outcomes">
            {d.outcomes.map((o) => (
              <li key={o.label} className={cn("rounded-md border px-3.5 py-3", TONES[o.tone])}>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em]">{o.label}</p>
                <p className="mt-1 text-[0.8rem] leading-snug opacity-90">{o.note}</p>
              </li>
            ))}
          </ul>
          {d.after && (
            <div className="mt-1 sm:mx-auto sm:w-1/3 sm:px-1">
              <span aria-hidden="true" className={cn("flex justify-center py-1", onPanel ? "text-panel-muted" : "text-line-strong")}>
                <ArrowDown size={14} />
              </span>
              <Box step={d.after} onPanel={onPanel} />
            </div>
          )}
        </div>
      )}

      <figcaption className={cn("mt-4 font-mono text-[0.68rem] uppercase tracking-[0.12em]", muted)}>{d.caption}</figcaption>
    </figure>
  );
}
