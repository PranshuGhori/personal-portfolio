import type { Status } from "@/content/public";
import { cn } from "@/lib/utils";

const STYLES: Record<Status["kind"], string> = {
  shipped: "border-accent/40 bg-accent-soft text-accent",
  research: "border-research/40 bg-research-soft text-research",
  prototype: "border-dashed border-line-strong bg-transparent text-ink-2",
  delivered: "border-line-strong bg-paper-2 text-ink-2",
};

const PANEL_STYLES: Record<Status["kind"], string> = {
  shipped: "border-[#8fbf9f]/50 bg-[#8fbf9f]/10 text-[#b9dcc4]",
  research: "border-[#d9b46a]/50 bg-[#d9b46a]/10 text-[#e6cc94]",
  prototype: "border-dashed border-panel-line text-panel-muted",
  delivered: "border-panel-line text-panel-muted",
};

export function StatusBadge({ status, onPanel = false, className }: { status: Status; onPanel?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[0.8rem] border px-2.5 py-0.5 font-mono text-[0.66rem] uppercase tracking-[0.1em]",
        onPanel ? PANEL_STYLES[status.kind] : STYLES[status.kind],
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      <span className="sr-only">Status: </span>
      {status.label}
    </span>
  );
}
