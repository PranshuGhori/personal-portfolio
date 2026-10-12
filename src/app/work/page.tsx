import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseStudies, companyWorkNote } from "@/content/public";
import { WorkFilter } from "@/components/work/work-filter";

const description =
  "Professional case studies in data science, machine learning, and data systems from Pranshu Ghori's Data Science Co-op at Command Credit Corp.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — Pranshu Ghori", description, url: "/work" },
};

export default function WorkPage() {
  return (
    <div className="shell py-14 md:py-20">
      <Link href="/" className="eyebrow inline-flex items-center gap-2 text-muted hover:text-ink">
        <ArrowLeft size={13} aria-hidden="true" /> Home
      </Link>
      <div className="mt-10 grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
        <p className="eyebrow pt-2 text-ink">Work — {caseStudies.length} studies</p>
        <div>
          <h1 className="display case-title max-w-[16ch] text-ink">Professional case studies.</h1>
          <p className="mt-6 max-w-[60ch] text-ink-2">
            Data science, machine learning, and data-systems work from my co-op at Command Credit Corp. Each study
            states what I did, how it was checked, what actually shipped, and where its limits are.
          </p>
          <p className="mt-3 text-sm text-muted">{companyWorkNote}</p>
        </div>
      </div>
      <div className="mt-14">
        <WorkFilter studies={caseStudies} />
      </div>
    </div>
  );
}
