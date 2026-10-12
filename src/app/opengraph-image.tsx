import { OG_SIZE, renderOgCard } from "@/lib/og";
import { profile } from "@/content/public";

export const alt = "Pranshu Ghori — Data Science, ML & AI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return renderOgCard({
    eyebrow: "Data Science · ML · AI",
    title: profile.headline,
    footer: "ASU · Tempe, AZ",
  });
}
