import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/public";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      {/* Anchors kept from the previous version of the site */}
      <span id="hero" aria-hidden="true" />
      <span id="about" aria-hidden="true" />
      <div className="shell pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1.5 text-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </p>
          <p className="eyebrow text-muted">{profile.location}</p>
          <p className="eyebrow text-muted">BDA + AI @ ASU ’27</p>
        </div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <h1 id="hero-title" className="display hero-title text-ink">
            {profile.headlineLines.map((line, i) => (
              <span key={line} className="block">
                {i === 1 ? <em className="italic">{line}</em> : line}
              </span>
            ))}
          </h1>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-md border border-line bg-paper-2 lg:mx-0">
            <Image
              src="/pranshu.jpeg"
              alt={profile.portraitAlt}
              fill
              priority
              sizes="(min-width: 1024px) 260px, 260px"
              className="scale-[1.75] object-cover"
              style={{ objectPosition: "44% 74%", transformOrigin: "44% 76%" }}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
          <p className="eyebrow pt-1 text-ink">
            {profile.name}
            <span className="block text-muted">
              {profile.role}, {profile.company}
            </span>
          </p>
          <div>
            <p className="max-w-[58ch] text-[1.08rem] leading-relaxed text-ink-2">{profile.bio}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              <li>
                <Link href="/#work" className="pill pill-solid">
                  View work <ArrowDownRight size={13} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <a href={profile.links.github} className="pill" target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={profile.links.linkedin} className="pill" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
              <li>
                <Link href="/#contact" className="pill">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-paper-2">
        <ul className="shell flex flex-wrap items-center gap-x-6 gap-y-2 py-4" aria-label="Focus areas">
          {profile.focus.map((f, i) => (
            <li key={f} className="eyebrow flex items-center gap-6 text-ink-2">
              {i > 0 && <span aria-hidden="true" className="text-accent">✦</span>}
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
