import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { CATEGORY_LABELS, type CaseStudy } from "@/content/public";
import { StatusBadge } from "@/components/ui/status-badge";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const titleId = `case-${study.slug}-title`;
  return (
    <article aria-labelledby={titleId} className="flex h-full flex-col rounded-md border border-line bg-card p-6 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-muted">
          {String(index).padStart(2, "0")} · {study.categories.map((c) => CATEGORY_LABELS[c]).join(" / ")}
        </p>
        <StatusBadge status={study.status} />
      </div>

      <h3 id={titleId} className="display mt-5 text-[1.9rem] leading-[1.05] text-ink md:text-[2.1rem]">
        <Link href={`/work/${study.slug}`} className="hover:underline hover:decoration-line-strong hover:underline-offset-4">
          {study.title}
        </Link>
      </h3>
      <p className="mt-3 text-[0.95rem] text-ink-2">{study.summary}</p>

      <details className="group mt-5 border-t border-line pt-4">
        <summary className="eyebrow flex items-center justify-between text-ink">
          Technical detail
          <Plus size={14} aria-hidden="true" className="disclosure-icon" />
        </summary>
        <ul className="mt-4 space-y-2 text-sm text-ink-2">
          {study.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="text-muted">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools">
          {study.tools.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      </details>

      <div className="mt-auto pt-6">
        <Link href={`/work/${study.slug}`} className="pill" aria-label={`Read case study: ${study.title}`}>
          Read case study <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
