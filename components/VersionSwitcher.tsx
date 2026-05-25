"use client";

import { createContext, useContext, useState, useEffect, useRef, startTransition, type ReactNode } from "react";

export type ThemeId = "retro-futuristic" | "minimal";

export const THEMES: { id: ThemeId; label: string; description: string }[] = [
  {
    id: "retro-futuristic",
    label: "Aesthetic | Retro-Futuristic",
    description: "Decorative, terminal-inspired design",
  },
  { id: "minimal", label: "Minimal | Clean", description: "High-contrast, recruiter-friendly layout" },
];

const STORAGE_KEY = "portfolio-theme";

// ── Context ───────────────────────────────────────────────────────────────────

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (id: ThemeId) => void }>({
  theme: "retro-futuristic",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("retro-futuristic");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && stored !== "retro-futuristic" && THEMES.some((t) => t.id === stored)) {
      document.documentElement.setAttribute("data-theme", stored);
      startTransition(() => setThemeState(stored));
    }
  }, []);

  function setTheme(id: ThemeId) {
    if (id === "retro-futuristic") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", id);
    }
    setThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VersionSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 border border-black/15 rounded-md cursor-pointer backdrop-blur-sm text-neutral-700 whitespace-nowrap hover:bg-white/90 transition-colors"
      >
        <span className="text-neutral-400 text-xs">◈</span>
        <span className="font-mono text-[0.7rem] tracking-wide">{active.label}</span>
        <span className="text-[0.5rem] text-neutral-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select website version"
          className="absolute top-[calc(100%+0.4rem)] right-0 min-w-[220px] bg-white/95 backdrop-blur-md border border-black/10 rounded-lg shadow-lg overflow-hidden list-none m-0 p-0"
        >
          {THEMES.map((t) => (
            <li
              key={t.id}
              role="option"
              aria-selected={t.id === theme}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`flex flex-col gap-0.5 px-4 py-2.5 cursor-pointer border-b border-black/5 last:border-b-0 transition-colors hover:bg-black/5 ${t.id === theme ? "bg-black/4" : ""}`}
            >
              <span
                className={`font-mono text-[0.7rem] font-bold ${t.id === theme ? "text-neutral-500" : "text-neutral-800"}`}
              >
                {t.label}
              </span>
              <span className="font-mono text-[0.6rem] text-neutral-400">{t.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
