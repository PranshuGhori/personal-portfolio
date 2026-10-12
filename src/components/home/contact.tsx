import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/public";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
          <p className="eyebrow pt-2 text-ink">07 — Contact</p>
          <div>
            <h2 id="contact-title" className="display hero-title max-w-[14ch] text-ink">
              Have data that needs to be useful?
            </h2>
            <p className="mt-6 max-w-[52ch] text-ink-2">
              {profile.availability}. The fastest way to reach me is email.
            </p>
            <a
              href={`mailto:${profile.links.email}`}
              className="display mt-8 inline-block break-all text-[1.6rem] text-ink underline decoration-line-strong underline-offset-[6px] hover:decoration-ink sm:text-[2.2rem]"
            >
              {profile.links.email}
            </a>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              <li>
                <a href={profile.links.linkedin} className="pill" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={profile.links.github} className="pill" target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
              {profile.resumeUrl && (
                <li>
                  <a href={profile.resumeUrl} className="pill">
                    Resume
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
