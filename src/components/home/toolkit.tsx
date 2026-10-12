import { toolkit } from "@/content/public";
import { Section } from "@/components/ui/section";

export function ToolkitSection() {
  return (
    <Section
      id="toolkit"
      aliases={["skills"]}
      number="06"
      label="Toolkit"
      title="Tools, listed where they were actually used."
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((g) => (
          <li key={g.title} className="flex flex-col bg-card p-6 sm:last:col-span-2">
            <h3 className="eyebrow text-ink">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.tools.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-sm text-muted">{g.usedIn}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
