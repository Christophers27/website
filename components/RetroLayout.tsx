import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site, experiences, projects, skills, contact } from "@/lib/data";

export default function RetroLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-6 relative z-10"
    >
      <RetroHero />
      <RetroSkills />
      <RetroProjects />
      <RetroExperience />
    </motion.div>
  );
}

function RetroHero() {
  return (
    <div className="md:col-span-12 flex flex-col md:flex-row border-[3px] border-[#2C2D28] rounded-2xl overflow-hidden bg-[#E6E5DF] shadow-[8px_8px_0px_#2C2D28]">
      <RetroIntroPanel />
      <RetroContactPanel />
    </div>
  );
}

function RetroIntroPanel() {
  return (
    <div className="w-full md:w-[65%] bg-[#D46B4E] text-[#E6E5DF] relative z-10 flex flex-col justify-between p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#2C2D28]">
      {/* Top deco bar */}
      <div className="flex justify-between items-start mb-4 border-b-2 border-[#E6E5DF]/20 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-[#E6E5DF] rounded-sm" />
            <div className="w-3 h-3 border border-[#E6E5DF] rounded-sm" />
            <div className="w-3 h-3 bg-[#2C2D28] rounded-sm" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 ml-2">
            SYS.INIT // CORE_INTRO
          </span>
        </div>
        <div className="font-mono text-[10px] opacity-70">LAT: 40.4406° N // LON: 79.9959° W</div>
      </div>

      {/* Name, role, intro */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">{site.name}</h1>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-xs bg-[#2C2D28] text-[#E6E5DF] px-3 py-1.5 rounded uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D46B4E] rounded-full animate-pulse" />
            {site.role}
          </span>
          <span className="font-mono text-[11px] border-2 border-[#E6E5DF]/30 px-3 py-1.5 rounded text-[#E6E5DF]/90 font-bold">
            LOC: {site.location}
          </span>
        </div>
        <p className="text-lg text-[#E6E5DF]/90 leading-relaxed max-w-2xl font-medium">{site.intro}</p>
      </div>

      {/* Bottom deco */}
      <div className="mt-4 flex justify-between items-end">
        <div className="flex gap-[2px] h-8 opacity-40">
          {[1, 3, 1, 2, 4, 1, 1, 0.5, 3, 2, 1, 1, 4, 2, 1, 5, 1, 1, 6, 0.5, 0.5, 0.5, 1, 0.5, 1].map((w, i) => (
            <div key={i} className="bg-[#E6E5DF] h-full" style={{ width: `${w * 2}px` }} />
          ))}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-3 bg-[#E6E5DF] rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

function RetroContactPanel() {
  return (
    <div className="w-full md:w-[35%] relative flex flex-col p-6 md:p-8 bg-[#E6E5DF]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{ backgroundImage: "radial-gradient(#2C2D28 1.2px, transparent 1.2px)", backgroundSize: "14px 14px" }}
      />

      {/* Status header */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <span className="font-mono text-[10px] font-bold tracking-widest text-[#2C2D28]/40 rotate-90 origin-top-left absolute left-0 top-0">
          NETWORK_I/O - OPERATIONAL
        </span>
        <div className="ml-6 w-full">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-3 h-3 border-2 border-[#2C2D28] rounded-sm ${site.available ? "bg-[#6A7C63]" : "bg-[#D46B4E]"}`}
            />
            <span className="font-mono text-[10px] font-bold tracking-widest">
              STATUS: {site.available ? "OPEN/FOR/WORK" : "OFFLINE"}
            </span>
          </div>
          <div className="h-[2px] w-full bg-[#2C2D28]/20 relative">
            <div className="absolute left-0 top-0 h-full w-42 bg-[#2C2D28]" />
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
            className="group relative flex flex-col bg-[#E6E5DF] border-2 border-[#2C2D28] p-3 transition-all hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0px_#2C2D28] hover:bg-[#2C2D28]/90 hover:text-[#E6E5DF] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#D46B4E] border-b-2 border-l-2 border-[#2C2D28] translate-x-[2px] translate-y-[-2px]" />
            <div className="flex justify-between items-center z-10">
              <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40 group-hover:opacity-100 group-hover:text-[#D46B4E]">
                  0{i + 1}
                </span>
                {c.label}
              </span>
              <span className="font-mono font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-[#D46B4E]">
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

function RetroSkills() {
  return (
    <RetroPanel variant="notched" className="md:col-span-12" greeble="DB.QUERY // SKILLS">
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* Left: header & metadata */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2 text-[#E6E5DF]">Technical Arsenal</h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E6E5DF]/70 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D46B4E] rounded-full animate-pulse" />
              Analyzing authorized subsets
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-5 gap-x-4 font-mono text-[9px] text-[#E6E5DF]/50 border-t-2 border-[#E6E5DF]/10 pt-5 mt-8 relative">
            <div className="absolute top-[-2px] left-0 w-8 h-[2px] bg-[#D46B4E]" />
            <div className="flex flex-col gap-1">
              <span className="opacity-50">TOTAL_NODES</span>
              <span className="text-[#E6E5DF] text-[11px]">{skills.length}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-50">SYS_STATUS</span>
              <span className="text-[#6A7C63] text-[11px]">OPTIMIZED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-50">LANG_V</span>
              <span className="text-[#E6E5DF] text-[11px]">ACTIVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-50">CORE_ML</span>
              <span className="text-[#E6E5DF] text-[11px]">COMPILED</span>
            </div>
          </div>
        </div>

        {/* Right: skill tags */}
        <div className="md:w-2/3 relative pt-6 md:pt-4 md:pr-8">
          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#E6E5DF 1px, transparent 1px), linear-gradient(90deg, #E6E5DF 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-px bg-[#E6E5DF]/15 flex justify-between items-start pointer-events-none">
            <div className="w-px h-3 bg-[#E6E5DF]/40" />
            <span className="font-mono text-[8px] text-[#E6E5DF]/40 translate-y-[-14px]">SEQ: 001-ALPHA // RND_04</span>
            <div className="w-px h-3 bg-[#E6E5DF]/40" />
          </div>
          <div className="relative z-10 flex flex-wrap gap-2.5 content-start mt-2">
            {skills.map((skill) => {
              let bg = "bg-[#E6E5DF]/5 border border-[#E6E5DF]/10 text-[#E6E5DF]/80";
              if (skill.type === "language") bg = "bg-[#D46B4E]/10 text-[#D46B4E] border border-[#D46B4E]/30";
              if (skill.type === "concept") bg = "bg-[#6A7C63]/15 text-[#E6E5DF] border border-[#6A7C63]/40";
              return (
                <span
                  key={skill.name}
                  className={`font-mono text-[11px] px-3 py-1.5 rounded-sm ${bg} transition-all duration-200 hover:bg-[#E6E5DF] hover:text-[#2C2D28] hover:border-[#E6E5DF] cursor-crosshair hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_rgba(212,107,78,0.5)]`}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </RetroPanel>
  );
}

function RetroProjects() {
  return (
    <div className="md:col-span-7 relative z-10 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b-[3px] border-[#2C2D28] pb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-4 h-4 bg-[#D46B4E]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 100%)" }}
            />
            <h2 className="text-3xl font-semibold tracking-tight uppercase">System Archives</h2>
          </div>
          <span className="font-mono text-[10px] text-[#2C2D28]/60 uppercase tracking-[0.2em]">
            Directory // Selected_Works // Root
          </span>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-[10px] text-[#2C2D28]/40 text-right">
          <div className="flex flex-col">
            <span>FILE_COUNT</span>
            <span className="text-[#2C2D28] font-bold">0{projects.length}</span>
          </div>
          <div className="flex flex-col">
            <span>SORT</span>
            <span className="text-[#2C2D28] font-bold">CHRONO</span>
          </div>
        </div>
      </div>

      {/* Accordion list */}
      <div className="flex flex-col border-b border-[#2C2D28]/20">
        {projects.map((proj, index) => (
          <RetroProjectItem key={proj.name} proj={proj} index={index} />
        ))}
      </div>
    </div>
  );
}

function RetroProjectItem({ proj, index }: { proj: (typeof projects)[number]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, type] = proj.name.split(" | ");

  return (
    <div className="flex flex-col border-t border-[#2C2D28]/20 group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between py-4 md:py-6 text-left hover:bg-[#2C2D28]/5 transition-colors relative cursor-crosshair outline-none focus-visible:bg-[#2C2D28]/5"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D46B4E] scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
        <div className="flex items-center gap-4 md:gap-6 pl-4 md:pl-6 w-full">
          <span className="font-mono text-xs md:text-sm text-[#2C2D28]/40 w-6">0{index + 1}</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase grow">{name}</h3>
          <span className="hidden xl:inline-block font-mono text-[10px] border border-[#2C2D28]/30 px-3 py-1 rounded text-[#2C2D28]/70 mr-2">
            {type}
          </span>
          <div className="font-mono text-sm w-6 text-center text-[#D46B4E] font-bold">{isExpanded ? "[-]" : "[+]"}</div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pl-4 md:pl-16 flex flex-col gap-8 relative">
              <div className="absolute top-0 left-8 w-px h-full bg-[#2C2D28]/10 hidden md:block" />
              <div className="absolute top-6 left-7 w-3 h-px bg-[#2C2D28]/10 hidden md:block" />

              <div>
                <div className="font-mono text-[9px] text-[#2C2D28]/40 mb-3 uppercase tracking-widest">
                  {">"} File_Description
                </div>
                <p className="text-sm md:text-base text-[#2C2D28]/80 leading-relaxed">{proj.description}</p>
              </div>

              <div>
                <div className="font-mono text-[9px] text-[#2C2D28]/40 mb-3 uppercase tracking-widest">
                  {">"} Required_Dependencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 border border-[#2C2D28]/20 bg-[#E6E5DF] px-3 py-1.5 rounded-sm"
                    >
                      <div className="w-1 h-1 bg-[#2C2D28]/40 rounded-full" />
                      <span className="font-mono text-[10px] text-[#2C2D28]/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-dashed border-[#2C2D28]/20 pt-4 gap-4">
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-max bg-[#2C2D28] text-[#E6E5DF] px-6 py-3 rounded hover:bg-[#D46B4E] transition-colors font-mono text-[11px] font-bold tracking-widest uppercase group/btn"
                >
                  Initialize Link
                  <span className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all">
                    {">>"}
                  </span>
                </a>
                <div className="flex gap-4 font-mono text-[8px] text-[#2C2D28]/30">
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
    <RetroPanel variant="thick" className="md:col-span-5 h-max" greeble="SYS.LOG // HISTORY">
      <div className="flex items-end justify-between mb-8 relative z-10 border-b-2 border-[#2C2D28]/10 pb-4">
        <h2 className="text-2xl font-bold tracking-tight uppercase">Experience Log</h2>
        <div className="font-mono text-[9px] flex flex-col items-end opacity-60">
          <span>{experiences.length}_ENTRIES</span>
          <span>SYNC: 2026.05.24</span>
        </div>
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#2C2D28]/15" />
        {experiences.map((exp, index) => (
          <div key={exp.company} className="relative pl-8 group">
            <div
              className={`absolute w-4 h-4 border-2 border-[#2C2D28] bg-[#E6E5DF] left-0 top-1 transition-colors group-hover:border-[#D46B4E] ${index === 0 ? "border-[#D46B4E]" : ""}`}
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            >
              {index === 0 && <div className="absolute inset-[3px] bg-[#D46B4E] rounded-full animate-pulse" />}
            </div>
            <h3 className="text-base font-bold uppercase tracking-wide group-hover:text-[#D46B4E] transition-colors">
              {exp.company}
            </h3>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-4 mt-1">
              <span className="text-sm text-[#2C2D28]/80 font-semibold">{exp.title}</span>
              <span className="font-mono text-[9px] text-[#E6E5DF] bg-[#2C2D28] px-2 py-1 rounded-sm w-max tracking-widest uppercase">
                {exp.date}
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-[#2C2D28]/70 leading-relaxed relative pl-4">
                  <span className="absolute left-0 top-2 w-1.5 h-[2px] bg-[#2C2D28]/40 group-hover:bg-[#D46B4E]/60 transition-colors" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
    default: { container: "border border-[#2C2D28]/20 rounded-3xl", greeble: "text-[#2C2D28]/30" },
    thick: {
      container: "border-[3px] border-[#2C2D28] rounded-3xl bg-[#E6E5DF]",
      greeble: "text-[#2C2D28]/50 font-bold",
    },
    accent: { container: "bg-[#D46B4E] text-[#E6E5DF] rounded-3xl", greeble: "text-[#E6E5DF]/40" },
    notched: { container: "bg-[#2C2D28] text-[#E6E5DF]", greeble: "text-[#E6E5DF]/40" },
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
