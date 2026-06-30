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

// ── Shared dropdown logic ─────────────────────────────────────────────────────

interface VersionSwitcherProps {
  variant?: "retro" | "minimal";
}

export default function VersionSwitcher({ variant = "retro" }: VersionSwitcherProps) {
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
      {variant === "retro" ? (
        <RetroTrigger label={active.label} open={open} onClick={() => setOpen((o) => !o)} />
      ) : (
        <MinimalTrigger label={active.label} open={open} onClick={() => setOpen((o) => !o)} />
      )}

      {open && (
        <Dropdown
          theme={theme}
          variant={variant}
          onSelect={(id) => {
            setTheme(id);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

function RetroTrigger({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-label="Switch website version"
      className="flex items-center gap-2 font-mono text-[10px] bg-ink text-bg px-3 py-1.5 rounded uppercase tracking-wide font-bold hover:bg-ink/80 transition-colors cursor-pointer border border-bg/20"
    >
      <span className="text-accent">◈</span>
      <span>{label}</span>
      <span className="text-[8px] opacity-60">{open ? "▲" : "▼"}</span>
    </button>
  );
}

function MinimalTrigger({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-label="Switch website version"
      className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-border text-text/60 hover:text-text hover:border-accent transition-colors cursor-pointer"
    >
      <span className="text-accent text-xs">◈</span>
      <span>{label}</span>
      <span className="text-[8px] opacity-50">{open ? "▲" : "▼"}</span>
    </button>
  );
}

// ── Shared dropdown list ──────────────────────────────────────────────────────

function Dropdown({
  theme,
  variant,
  onSelect,
}: {
  theme: ThemeId;
  variant: "retro" | "minimal";
  onSelect: (id: ThemeId) => void;
}) {
  const isRetro = variant === "retro";

  return (
    <ul
      role="listbox"
      aria-label="Select website version"
      className={`absolute top-[calc(100%+0.5rem)] right-0 min-w-[220px] overflow-hidden list-none m-0 p-0 z-50 ${
        isRetro
          ? "bg-ink border-2 border-bg/20 shadow-[4px_4px_0px_var(--color-accent)]"
          : "bg-bg border border-border shadow-lg"
      }`}
    >
      {THEMES.map((t) => (
        <li
          key={t.id}
          role="option"
          aria-selected={t.id === theme}
          onClick={() => onSelect(t.id)}
          className={`flex flex-col gap-0.5 px-4 py-2.5 cursor-pointer border-b last:border-b-0 transition-colors ${
            isRetro
              ? `border-bg/10 hover:bg-bg/5 ${t.id === theme ? "bg-accent/10" : ""}`
              : `border-border hover:bg-ink/5 ${t.id === theme ? "bg-ink/5" : ""}`
          }`}
        >
          <span
            className={`font-mono text-[0.7rem] font-bold ${
              isRetro
                ? t.id === theme
                  ? "text-accent"
                  : "text-bg/80"
                : t.id === theme
                  ? "text-accent"
                  : "text-text/80"
            }`}
          >
            {t.label}
          </span>
          <span className={`font-mono text-[0.6rem] ${isRetro ? "text-bg/40" : "text-text/40"}`}>{t.description}</span>
        </li>
      ))}
    </ul>
  );
}
