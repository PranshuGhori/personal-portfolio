"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this page.
  }
  listeners.forEach((l) => l());
}

export function ThemeToggle() {
  // The server always renders the light default; the pre-paint script and this
  // store bring the button in line with the real theme after hydration.
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      aria-pressed={theme === "dark"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
    >
      <Moon size={15} aria-hidden="true" className="theme-icon-dark" />
      <Sun size={15} aria-hidden="true" className="theme-icon-light" />
    </button>
  );
}
