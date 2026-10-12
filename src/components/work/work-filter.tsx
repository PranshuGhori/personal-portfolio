"use client";

import { useState } from "react";
import { CATEGORY_LABELS, type CaseStudy, type Category } from "@/content/public";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "./case-study-card";

type Filter = "all" | Category;

const FILTERS: Filter[] = ["all", "data-science", "machine-learning", "data-systems"];

export function WorkFilter({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? studies : studies.filter((s) => s.categories.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter case studies by category" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = f === "all" ? studies.length : studies.filter((s) => s.categories.includes(f)).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn("pill", filter === f && "pill-solid")}
            >
              {f === "all" ? "All" : CATEGORY_LABELS[f]}
              <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {studies.length} case studies
      </p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {visible.map((s) => (
          <li key={s.slug}>
            <CaseStudyCard study={s} index={studies.indexOf(s) + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}
