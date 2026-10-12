import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/content/public";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience" number="02" label="Experience" title="Where the work has happened." tone="paper-2">
      <ol className="divide-y divide-line border-y border-line bg-paper">
        {experience.map((role) => (
          <li key={`${role.org}-${role.title}`} className="grid gap-4 px-4 py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:px-6">
            <div className="space-y-1.5">
              <p className="eyebrow text-ink-2">{role.period}</p>
              <p className="eyebrow text-muted">{role.type}</p>
              {role.current && (
                <p className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 text-accent">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
                  Active
                </p>
              )}
            </div>
            <div>
              <h3 className="display text-[1.75rem] leading-tight text-ink">{role.title}</h3>
              <p className="eyebrow mt-1 text-accent">
                {role.org} <span className="text-muted">· {role.location}</span>
              </p>
              <p className="mt-3 max-w-[62ch] text-ink-2">{role.summary}</p>
              <ul className="mt-4 max-w-[68ch] space-y-2 text-[0.95rem] text-ink-2">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="text-muted">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools">
                {role.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {role.caseStudyLinks && (
                <Link href="/work" className="text-link eyebrow mt-6 inline-flex items-center gap-2 text-ink">
                  Read the case studies <ArrowRight size={13} aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
