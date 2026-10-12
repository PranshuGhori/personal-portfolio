import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/content/public";
import { Section } from "@/components/ui/section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      number="05"
      label="Personal projects"
      title="Built on my own time."
      intro={<p>Independent projects, separate from any employer work above.</p>}
      tone="paper-2"
    >
      <ul className="divide-y divide-line border-y border-line bg-paper">
        {projects.map((p) => (
          <li key={p.slug} className="grid gap-4 px-4 py-7 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:px-6">
            <p className="eyebrow pt-1.5 text-muted">{p.kind}</p>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="display text-[1.7rem] leading-tight text-ink">{p.title}</h3>
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill shrink-0"
                    aria-label={`View repository: ${p.title} (opens GitHub)`}
                  >
                    View repository <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="eyebrow shrink-0 pt-2 text-muted">Repository not public</span>
                )}
              </div>
              <p className="mt-2 max-w-[62ch] text-ink-2">{p.summary}</p>
              <details className="mt-4 max-w-[68ch]">
                <summary className="eyebrow inline-flex items-center gap-2 text-ink">
                  How it works <Plus size={13} aria-hidden="true" className="disclosure-icon" />
                </summary>
                <ul className="mt-3 space-y-2 text-[0.95rem] text-ink-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden="true" className="text-muted">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </details>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
