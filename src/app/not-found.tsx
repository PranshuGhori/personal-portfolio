import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-24 md:py-32">
      <p className="eyebrow text-muted">404</p>
      <h1 className="display case-title mt-4 max-w-[16ch] text-ink">This page isn’t here.</h1>
      <div className="mt-10 flex flex-wrap gap-2.5">
        <Link href="/" className="pill pill-solid">
          Home
        </Link>
        <Link href="/work" className="pill">
          All work
        </Link>
      </div>
    </div>
  );
}
