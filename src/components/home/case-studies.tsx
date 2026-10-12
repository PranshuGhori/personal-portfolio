import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FLAGSHIP_SLUG, caseStudies, companyWorkNote } from "@/content/public";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/work/case-study-card";

export function CaseStudiesSection() {
  const others = caseStudies.filter((s) => s.slug !== FLAGSHIP_SLUG);
  return (
    <Section
      id="case-studies"
      number="04"
      label="Professional work"
      title="Four more studies from the same desk."
      intro={<p className="text-sm text-muted">{companyWorkNote}</p>}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {others.map((s) => (
          <li key={s.slug}>
            <CaseStudyCard study={s} index={caseStudies.indexOf(s) + 1} />
          </li>
        ))}
      </ul>
      <Link href="/work" className="pill mt-10">
        All case studies <ArrowRight size={13} aria-hidden="true" />
      </Link>
    </Section>
  );
}
