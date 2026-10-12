import { education } from "@/content/public";
import { Section } from "@/components/ui/section";

export function EducationSection() {
  return (
    <Section id="education" number="01" label="Education" title="Two degrees, one question: what makes data useful?">
      <article className="max-w-[640px] rounded-md border border-line bg-card p-6 md:p-8">
        <p className="eyebrow flex flex-wrap justify-between gap-2 text-muted">
          <span>
            {education.start} — {education.expectedGraduation} (expected)
          </span>
          <span>{education.location}</span>
        </p>
        <h3 className="display mt-6 text-[2rem] leading-tight text-ink md:text-[2.3rem]">{education.school}</h3>
        <ul className="mt-3 space-y-1 text-ink-2">
          {education.degrees.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-muted">{education.note}</p>

        <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
          {education.details.map((d) => (
            <div key={d.label} className="flex flex-col-reverse bg-card px-4 py-4">
              <dt className="eyebrow mt-1 text-muted">{d.label}</dt>
              <dd className="display text-[1.8rem] leading-tight text-ink">{d.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Honors">
          {education.honors.map((h) => (
            <li key={h} className="tag whitespace-normal">
              {h}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
