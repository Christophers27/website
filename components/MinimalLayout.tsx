import { site, experiences, projects, skills, contact } from "@/lib/data";
import { motion } from "motion/react";

export default function MinimalLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-16 max-w-3xl mx-auto"
    >
      <MinimalHero />
      <MinimalSkills />
      <MinimalProjects />
      <MinimalExperience />
    </motion.div>
  );
}

function MinimalHero() {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3" style={{ color: "var(--color-text)" }}>
        {site.name}
      </h1>
      <p className="text-base font-medium mb-1" style={{ color: "var(--color-accent)" }}>
        {site.role}
      </p>
      <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
        {site.location}
      </p>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text)", opacity: 0.8 }}>
        {site.intro}
      </p>

      {/* Availability badge */}
      <div className="flex items-center gap-2 mb-8">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: site.available ? "var(--color-muted)" : "var(--color-accent)" }}
        />
        <span className="text-sm font-medium" style={{ color: "var(--color-text)", opacity: 0.7 }}>
          {site.available ? "Open to work" : "Not available"}
        </span>
      </div>

      {/* Contact links */}
      <div className="flex flex-wrap gap-3">
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-2 rounded border transition-colors"
            style={{
              color: "var(--color-text)",
              borderColor: "var(--color-border)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-bg)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
            }}
          >
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function MinimalSkills() {
  const languages = skills.filter((s) => s.type === "language");
  const technologies = skills.filter((s) => s.type === "technology");
  const concepts = skills.filter((s) => s.type === "concept");

  const groups = [
    { label: "Languages", items: languages },
    { label: "Technologies", items: technologies },
    { label: "Concepts", items: concepts },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--color-text)" }}>
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {groups.map(({ label, items }) => (
          <div key={label}>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-muted)" }}
            >
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill.name}
                  className="text-sm px-3 py-1 rounded border"
                  style={{ color: "var(--color-text)", borderColor: "var(--color-border)", background: "transparent" }}
                >
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

function MinimalProjects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--color-text)" }}>
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map((proj) => {
          const [name, type] = proj.name.split(" | ");
          return (
            <div key={proj.name} className="border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>
                  {name}
                </h3>
                {type && (
                  <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {type}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text)", opacity: 0.75 }}>
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      color: "var(--color-accent)",
                      background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4"
                style={{ color: "var(--color-accent)" }}
              >
                View project →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MinimalExperience() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--color-text)" }}>
        Experience
      </h2>
      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>
                {exp.company}
              </h3>
              <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
                {exp.date}
              </span>
            </div>
            <p className="text-sm font-medium mb-4" style={{ color: "var(--color-accent)" }}>
              {exp.title}
            </p>
            <ul className="flex flex-col gap-2">
              {exp.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed flex gap-3"
                  style={{ color: "var(--color-text)", opacity: 0.75 }}
                >
                  <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>–</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
