# Pranshu Ghori — portfolio

Personal site for Pranshu Ghori (Data Science, ML, and AI). Next.js App Router, React, TypeScript, Tailwind CSS 4.

## Run

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm test           # content-shape and content-safety checks
npm run build && npm start
```

`npm test` needs Node 22.18 or newer (it imports the TypeScript content module directly).

## Where things live

| Path | What |
|---|---|
| `src/content/public.ts` | The only content source: profile, education, experience, case studies, projects, toolkit. Public-safe by design. |
| `src/app/page.tsx` | Homepage composition |
| `src/app/work/` | `/work` index and statically generated `/work/[slug]` case studies |
| `src/components/home/` | Homepage sections |
| `src/components/work/` | Case-study card, filter, simplified diagrams, synthetic examples |
| `src/components/layout/` | Header (mobile menu, theme toggle) and footer |
| `src/lib/site.ts` | Canonical URL and default metadata |

## Content rules

Professional work is described through anonymized, qualitative summaries and fully synthetic examples.
`publicMetrics` stays empty until a number is explicitly approved for public use. `npm test` fails if
employer case studies contain digits, internal-looking paths or references, or links other than the
owner's verified public profiles and repositories.

An optional, gitignored `.content-denylist.local` (one term per line) adds private terms that must never
appear in `src/` or in the built output under `.next/`. Run `npm test` after `npm run build` to scan both.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to override the canonical origin (for example, a custom domain).
