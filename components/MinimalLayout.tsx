"use client";

import { motion } from "motion/react";
import { site, experiences, projects, skills, contact } from "@/lib/data";
import { Md } from "@/lib/markdown";

export default function MinimalLayout({ switcher }: { switcher?: React.ReactNode }) {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pt-2">
          <MinimalHero />
          <MinimalContacts switcher={switcher} />
        </div>

        <Divider />
        <MinimalExperience />
        <Divider />
        <MinimalProjects />
        <Divider />
        <MinimalSkills />
      </motion.div>
    </>
  );
}

function Divider() {
  return <hr className="border-0 border-t border-border" />;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-muted">{children}</h2>;
}

function MinimalHero() {
  return (
    <div className="flex-1 min-w-0">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-text">{site.name}</h1>
      <p className="text-sm font-medium mb-0.5 text-accent">{site.role}</p>
      <p className="text-xs mb-4 text-muted">{site.location}</p>
      <p className="text-sm leading-relaxed max-w-xl text-text/70">{site.intro}</p>
    </div>
  );
}

function MinimalContacts({ switcher }: { switcher?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 md:items-end shrink-0">
      {switcher && <div className="mb-2">{switcher}</div>}

      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${site.available ? "bg-muted" : "bg-accent"}`} />
        <span className="text-xs text-muted">{site.available ? "Open to work" : "Not available"}</span>
      </div>

      {contact.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-text/50 hover:text-text transition-opacity"
        >
          {c.label} <span className="text-accent">↗</span>
        </a>
      ))}
    </div>
  );
}

function MinimalExperience() {
  return (
    <section>
      <SectionHeading>Experience</SectionHeading>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8">
            <div>
              <div className="flex items-baseline gap-2 mb-0.5">
                <h3 className="text-sm font-semibold text-text">{exp.company}</h3>
                <span className="text-xs text-accent">{exp.title}</span>
              </div>
              <ul className="flex flex-col gap-1 mt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-2 text-text/60">
                    <span className="shrink-0 mt-0.5 text-accent">›</span>
                    <Md>{desc}</Md>
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-xs font-mono md:text-right mt-0.5 shrink-0 text-muted">{exp.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MinimalProjects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-5">
        {projects.map((proj) => {
          const [name, type] = proj.name.split(" | ");
          return (
            <div key={proj.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-sm font-semibold text-text">{name}</h3>
                  {type && <span className="text-xs text-muted">{type}</span>}
                </div>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-accent/70 hover:text-accent transition-colors"
                >
                  View ↗
                </a>
              </div>
              <Md as="p" className="text-sm leading-relaxed mb-2 text-text/60">
                {proj.description}
              </Md>
              <div className="flex flex-wrap gap-1.5">
                {proj.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded-sm text-accent bg-accent/10 border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MinimalSkills() {
  const groups = [
    { label: "Languages", items: skills.filter((s) => s.type === "language") },
    { label: "Technologies", items: skills.filter((s) => s.type === "technology") },
    { label: "Concepts", items: skills.filter((s) => s.type === "concept") },
  ];

  return (
    <section className="pb-8">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-col gap-4">
        {groups.map(({ label, items }) => (
          <div key={label} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="text-[10px] uppercase tracking-widest w-20 shrink-0 text-muted">{label}</span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span key={skill.name} className="text-xs px-2 py-0.5 rounded-sm border border-border text-text/80">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
