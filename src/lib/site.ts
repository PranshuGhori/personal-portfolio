// Canonical origin. Set NEXT_PUBLIC_SITE_URL when the site moves to a custom domain.
const productionUrl = "https://pranshughori.com";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : productionUrl)
).replace(/\/$/, "");

export const siteTitle = "Pranshu Ghori — Data Science, ML & AI";
export const siteDescription =
  "Pranshu Ghori is a Data Science Co-op at Command Credit Corp and a Business Data Analytics + Artificial Intelligence student at Arizona State University, turning messy data into useful decisions and dependable systems.";
