import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORY_LABELS, FLAGSHIP_SLUG, flagshipEvidence, getCaseStudy } from "@/content/public";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { FlowDiagram } from "@/components/work/flow-diagram";

export function FlagshipSection() {
  const study = getCaseStudy(FLAGSHIP_SLUG);
  if (!study) return null;

  return (
    <Section id="work" number="03" label="Flagship" title="The study I would want read first.">
      <article
        aria-labelledby="flagship-title"
        className="overflow-hidden rounded-md border border-panel-line bg-panel text-panel-ink"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 100% 0%, rgba(143,191,159,0.12), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(255,255,255,0.03), transparent 60%)",
        }}
      >
        <div className="p-6 sm:p-8 md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-panel-line pb-5">
            <p className="eyebrow text-panel-muted">01 · {study.title}</p>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow text-panel-muted">{study.categories.map((c) => CATEGORY_LABELS[c]).join(" · ")}</p>
              <StatusBadge status={study.status} onPanel />
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h3 id="flagship-title" className="display text-[2.4rem] leading-[1.02] sm:text-[3rem] md:text-[3.6rem]">
                {study.headline}
              </h3>
              <p className="mt-6 max-w-[56ch] text-panel-muted">{study.summary}</p>
              <p className="mt-4 max-w-[56ch] text-panel-muted">{study.contribution}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tools">
                {study.tools.map((t) => (
                  <li key={t} className="tag border-panel-line text-panel-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={`/work/${study.slug}`}
                className="pill mt-8 border-panel-ink bg-panel-ink text-panel hover:bg-transparent hover:text-panel-ink"
              >
                Read case study <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>

            <div>
              <p className="eyebrow text-panel-muted">How it was checked</p>
              <ul className="mt-4 space-y-3">
                {flagshipEvidence.map((e) => (
                  <li key={e} className="flex gap-3 border-b border-panel-line pb-3 text-[0.95rem]">
                    <span aria-hidden="true" className="text-[#8fbf9f]">→</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8 text-panel-muted">What shipped</p>
              <ul className="mt-4 space-y-3">
                {study.subwork.map((w) => (
                  <li key={w.title} className="flex flex-wrap items-center justify-between gap-2 text-[0.95rem]">
                    <span>{w.title}</span>
                    <StatusBadge status={w.status} onPanel />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-panel-line p-6 sm:p-8 md:px-12 md:py-10">
          <FlowDiagram id={study.diagram} onPanel />
        </div>
      </article>
    </Section>
  );
}
