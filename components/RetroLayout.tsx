"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site, experiences, projects, skills, contact } from "@/lib/data";
import { Md } from "@/lib/markdown";
import ScrollArea from "@/components/ScrollArea";

export default function RetroLayout({ switcher }: { switcher?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-6 relative z-10"
    >
      <RetroHero switcher={switcher} />
      <RetroSkills />
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <RetroProjects />
        <RetroExperience />
      </div>
    </motion.div>
  );
}

function RetroHero({ switcher }: { switcher?: React.ReactNode }) {
  return (
    <div className="md:col-span-12 flex flex-col md:flex-row border-[3px] border-ink rounded-2xl overflow-hidden bg-bg shadow-[8px_8px_0px_var(--color-ink)]">
      <RetroIntroPanel switcher={switcher} />
      <RetroContactPanel />
    </div>
  );
}

function RetroIntroPanel({ switcher }: { switcher?: React.ReactNode }) {
  return (
    <div className="w-full md:w-[65%] bg-accent text-bg relative z-10 flex flex-col justify-between p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink">
      {/* Top deco bar */}
      <div className="flex justify-between items-center mb-4 border-b-2 border-bg/20 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-bg rounded-sm" />
            <div className="w-3 h-3 border border-bg rounded-sm" />
            <div className="w-3 h-3 bg-ink rounded-sm" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 ml-2">
            SYS.INIT // CORE_INTRO
          </span>
        </div>
        {switcher}
      </div>

      {/* Name, role, intro */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">{site.name}</h1>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-xs bg-ink text-bg px-3 py-1.5 rounded uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {site.role}
          </span>
          <span className="font-mono text-[11px] border-2 border-bg/30 px-3 py-1.5 rounded text-bg/90 font-bold">
            LOC: {site.location}
          </span>
        </div>
        <p className="text-lg text-bg/90 leading-relaxed max-w-2xl font-medium">{site.intro}</p>
      </div>

      {/* Bottom deco */}
      <div className="mt-4 flex justify-between items-end">
        <div className="flex gap-[2px] h-8 opacity-40">
          {[1, 3, 1, 2, 4, 1, 1, 0.5, 3, 2, 1, 1, 4, 2, 1, 5, 1, 1, 6, 0.5, 0.5, 0.5, 1, 0.5, 1].map((w, i) => (
            <div key={i} className="bg-bg h-full" style={{ width: `${w * 2}px` }} />
          ))}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-3 bg-bg rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

function RetroContactPanel() {
  return (
    <div className="w-full md:w-[35%] relative flex flex-col p-6 md:p-8 bg-bg">
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(var(--color-ink) 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Status header */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <span className="font-mono text-[10px] font-bold tracking-widest text-ink/40 rotate-90 origin-top-left absolute left-0 top-0">
          NETWORK_I/O - OPERATIONAL
        </span>
        <div className="ml-6 w-full">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 border-2 border-ink rounded-sm ${site.available ? "bg-muted" : "bg-accent"}`} />
            <span className="font-mono text-[10px] font-bold tracking-widest">
              STATUS: {site.available ? "OPEN/FOR/WORK" : "OFFLINE"}
            </span>
          </div>
          <div className="h-[2px] w-full bg-ink/20 relative">
            <div className="absolute left-0 top-0 h-full w-42 bg-ink" />
          </div>
        </div>
      </div>

      {/* Contact links */}
      <div className="relative z-10 flex flex-col gap-3 mt-auto ml-6">
        {contact.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col bg-bg border-2 border-ink p-3 transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_var(--color-ink)] hover:bg-ink/90 hover:text-bg overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-3 h-3 bg-accent border-b-2 border-l-2 border-ink translate-x-[2px] translate-y-[-2px]" />
            <div className="flex justify-between items-center z-10">
              <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40 group-hover:opacity-100 group-hover:text-accent">
                  0{i + 1}
                </span>
                {c.label}
              </span>
              <span className="font-mono font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-accent">
                {">>"}
              </span>
            </div>
            <span className="font-mono text-[10px] mt-1 opacity-60 group-hover:opacity-80">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────

function RetroSkills() {
  const NOTCH = 32;
  const BORDER = 3;
  const clip = (n: number) => `polygon(0 0, 100% 0, 100% calc(100% - ${n}px), calc(100% - ${n}px) 100%, 0 100%)`;

  return (
    <div className="md:col-span-12">
      <div className="bg-accent" style={{ clipPath: clip(NOTCH + BORDER), padding: BORDER }}>
        <div className="bg-ink text-bg relative" style={{ clipPath: clip(NOTCH) }}>
          <div className="absolute top-3 left-5 font-mono text-[10px] uppercase tracking-widest select-none text-bg/40 z-10">
            DB.QUERY // SKILLS
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between px-5 md:px-8 pt-10 pb-5">
            {/* Left: header + data block */}
            <div className="md:w-1/3 flex flex-col gap-3">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-bg">Technical Arsenal</h2>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/60 mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  Analyzing authorized subsets
                </div>
              </div>
              <div className="flex gap-x-6 gap-y-2 flex-wrap font-mono text-[9px] text-bg/50 border-t border-bg/10 pt-3 relative">
                <div className="absolute -top-px left-0 w-6 h-px bg-accent" />
                {(
                  [
                    ["TOTAL_NODES", String(skills.length)],
                    ["SYS_STATUS", "OPTIMIZED"],
                    ["LANG_V", "ACTIVE"],
                    ["CORE_ML", "COMPILED"],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="opacity-50">{label}</span>
                    <span className={`text-[10px] ${label === "SYS_STATUS" ? "text-muted" : "text-bg"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: skill tags */}
            <div className="md:w-2/3 relative">
              <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-bg) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-px bg-bg/20 flex justify-between items-start pointer-events-none">
                <span className="font-mono text-[8px] text-bg/20 -translate-y-3">SEQ: 001-ALPHA // RND_04</span>
                <div className="w-px h-2.5 bg-bg/20" />
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 content-start pt-2">
                {skills.map((skill) => {
                  let cls = "bg-bg/5 border border-bg/10 text-bg/80";
                  if (skill.type === "language") cls = "bg-accent/10 text-accent border border-accent/30";
                  if (skill.type === "concept") cls = "bg-muted/15 text-bg border border-muted/40";
                  return (
                    <span
                      key={skill.name}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-sm ${cls} transition-all duration-200 hover:bg-bg hover:text-ink hover:border-bg cursor-crosshair hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--color-accent)]`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetroProjects() {
  return (
    <div className="md:col-span-7 flex flex-col h-[800px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b-[3px] border-ink pb-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-4 h-4 bg-accent"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 100%)" }}
            />
            <h2 className="text-3xl font-semibold tracking-tight uppercase">System Archives</h2>
          </div>
          <span className="font-mono text-[10px] text-ink/60 uppercase tracking-[0.2em]">
            Directory // Selected_Works // Root
          </span>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-[10px] text-ink/40 text-right">
          <div className="flex flex-col">
            <span>FILE_COUNT</span>
            <span className="text-ink font-bold">0{projects.length}</span>
          </div>
          <div className="flex flex-col">
            <span>SORT</span>
            <span className="text-ink font-bold">CHRONO</span>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-0 border-b border-ink/20">
        <div className="flex flex-col">
          {projects.map((proj, index) => (
            <RetroProjectItem key={proj.name} proj={proj} index={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function RetroProjectItem({ proj, index }: { proj: (typeof projects)[number]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [name, type] = proj.name.split(" | ");

  return (
    <div className="flex flex-col border-t border-ink/20 group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between py-3 text-left hover:bg-ink/5 transition-colors relative cursor-crosshair outline-none focus-visible:bg-ink/5"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
        <div className="flex items-center gap-3 pl-4 md:pl-5 w-full min-w-0">
          <span className="font-mono text-xs text-ink/40 shrink-0">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-lg md:text-xl font-bold tracking-tight uppercase truncate grow">{name}</h3>
          {type && (
            <span className="hidden xl:inline-block font-mono text-[10px] border border-ink/60 px-2 py-0.5 rounded text-ink/80 shrink-0">
              {type}
            </span>
          )}
          <a
            href={proj.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-[10px] text-accent/60 hover:text-accent transition-colors shrink-0 mr-1"
            title="Open project"
          >
            {"[↗]"}
          </a>
          <div className="font-mono text-xs w-5 text-center text-accent/60 font-bold shrink-0">
            {isExpanded ? "[-]" : "[+]"}
          </div>
        </div>
      </button>

      {!isExpanded && (
        <div className="pl-5 md:pl-13 pr-4 pb-3 flex flex-col gap-2">
          <p className="text-sm text-ink/70 leading-relaxed line-clamp-2">
            <Md>{proj.description}</Md>
          </p>
          <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
            {proj.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-1 border border-ink/20 bg-bg px-2 py-0.5 rounded-sm shrink-0"
              >
                <div className="w-1 h-1 bg-ink/40 rounded-full" />
                <span className="font-mono text-[9px] text-ink/70">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-5 md:pl-13 pr-4 pb-4 flex flex-col gap-3 relative">
              <div className="absolute top-0 left-8 w-px h-full bg-ink/10 hidden md:block" />
              <div className="absolute top-3 left-7 w-3 h-px bg-ink/10 hidden md:block" />

              <div>
                <div className="font-mono text-[9px] text-ink/40 mb-1.5 uppercase tracking-widest">
                  {">"} File_Description
                </div>
                <p className="text-sm text-ink/80 leading-relaxed">
                  <Md>{proj.description}</Md>
                </p>
              </div>

              <div>
                <div className="font-mono text-[9px] text-ink/40 mb-1.5 uppercase tracking-widest">
                  {">"} Required_Dependencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1 border border-ink/20 bg-bg px-2 py-0.5 rounded-sm"
                    >
                      <div className="w-1 h-1 bg-ink/40 rounded-full" />
                      <span className="font-mono text-[9px] text-ink/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-dashed border-ink/20 pt-2.5">
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-bg px-4 py-1.5 rounded hover:bg-accent transition-colors font-mono text-[10px] font-bold tracking-widest uppercase group/btn"
                >
                  Initialize Link
                  <span className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all">
                    {">>"}
                  </span>
                </a>
                <div className="flex gap-3 font-mono text-[8px] text-ink/30">
                  <span>ENCRYPTION: NONE</span>
                  <span>STATUS: COMPILED</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RetroExperience() {
  return (
    <RetroPanel variant="thick" className="md:col-span-5 h-[800px]" greeble="SYS.LOG // HISTORY">
      <div className="flex items-end justify-between mb-4 relative z-10 border-b-2 border-ink/10 pb-3">
        <h2 className="text-2xl font-bold tracking-tight uppercase">Experience Log</h2>
        <div className="font-mono text-[9px] flex flex-col items-end opacity-60">
          <span>{experiences.length}_ENTRIES</span>
          <span>SYNC: 2026.05.24</span>
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-0 relative z-10">
        <div className="flex flex-col gap-8 relative pr-1">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-ink/15" />
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 group">
              <div
                className={`absolute w-4 h-4 border-2 border-ink bg-bg left-0 top-1 transition-colors group-hover:border-accent ${index === 0 ? "border-accent" : ""}`}
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                {index === 0 && <div className="absolute inset-[3px] bg-accent rounded-full animate-pulse" />}
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide group-hover:text-accent transition-colors">
                {exp.company}
              </h3>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1.5 mb-3 mt-1">
                <span className="text-sm text-ink/80 font-semibold">{exp.title}</span>
                <span className="font-mono text-[9px] text-bg bg-ink px-2 py-1 rounded-sm w-max tracking-widest uppercase">
                  {exp.date}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm text-ink/70 leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-2 w-1.5 h-[2px] bg-ink/40 group-hover:bg-accent/60 transition-colors" />
                    <Md>{desc}</Md>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollArea>
    </RetroPanel>
  );
}

type RetroPanelVariant = "default" | "accent" | "thick" | "notched";

function RetroPanel({
  children,
  className = "",
  greeble = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  greeble?: string;
  variant?: RetroPanelVariant;
}) {
  const variantStyles: Record<RetroPanelVariant, { container: string; greeble: string }> = {
    default: { container: "border border-ink/20 rounded-3xl", greeble: "text-ink/30" },
    thick: { container: "border-[3px] border-ink rounded-3xl bg-bg", greeble: "text-ink/50 font-bold" },
    accent: { container: "bg-accent text-bg rounded-3xl", greeble: "text-bg/40" },
    notched: { container: "bg-ink text-bg", greeble: "text-bg/40" },
  };

  const { container, greeble: greebleColor } = variantStyles[variant];

  return (
    <div
      className={`relative p-6 md:p-8 flex flex-col ${container} ${className}`}
      style={
        variant === "notched"
          ? { clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }
          : {}
      }
    >
      {greeble && (
        <div
          className={`absolute top-4 left-6 font-mono text-[10px] uppercase tracking-widest select-none ${greebleColor}`}
        >
          {greeble}
        </div>
      )}
      <div className="mt-6 h-full flex flex-col relative z-10">{children}</div>
    </div>
  );
}
