import Link from "next/link";
import { profile } from "@/content/public";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/work" className="eyebrow text-muted hover:text-ink">
              Work
            </Link>
          </li>
          <li>
            <a href={profile.links.github} className="eyebrow text-muted hover:text-ink" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} className="eyebrow text-muted hover:text-ink" rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.links.email}`} className="eyebrow text-muted hover:text-ink">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
