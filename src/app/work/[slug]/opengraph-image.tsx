import { OG_SIZE, renderOgCard } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/content/public";

export const alt = "Case study by Pranshu Ghori";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOgCard({
    eyebrow: "Case study",
    title: study?.title ?? "Case study",
    footer: study?.status.label ?? "",
  });
}
