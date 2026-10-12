import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  number: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "paper" | "paper-2";
  /** Extra anchor ids kept for links to the previous version of the site. */
  aliases?: string[];
  children: React.ReactNode;
};

export function Section({ id, number, label, title, intro, tone = "paper", aliases, children }: SectionProps) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-line py-20 md:py-28", tone === "paper-2" && "bg-paper-2")}
    >
      {aliases?.map((a) => <span key={a} id={a} aria-hidden="true" className="block" />)}
      <div className="shell">
        <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
          <p className="eyebrow pt-2 text-ink">
            {number} — {label}
          </p>
          <div>
            <h2 id={headingId} className="display section-title max-w-[20ch] text-ink">
              {title}
            </h2>
            {intro && <div className="mt-5 max-w-[60ch] text-ink-2">{intro}</div>}
          </div>
        </div>
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
