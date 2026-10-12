import { Hero } from "@/components/home/hero";
import { EducationSection } from "@/components/home/education";
import { ExperienceSection } from "@/components/home/experience";
import { FlagshipSection } from "@/components/home/flagship";
import { CaseStudiesSection } from "@/components/home/case-studies";
import { ProjectsSection } from "@/components/home/projects";
import { ToolkitSection } from "@/components/home/toolkit";
import { ContactSection } from "@/components/home/contact";
import { education, profile } from "@/content/public";
import { siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  address: { "@type": "PostalAddress", addressLocality: "Tempe", addressRegion: "AZ", addressCountry: "US" },
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <EducationSection />
      <ExperienceSection />
      <FlagshipSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <ToolkitSection />
      <ContactSection />
    </>
  );
}
