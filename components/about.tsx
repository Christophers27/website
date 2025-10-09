"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Widgets from "./widgets";

const skills = [
  { name: "Python", level: 5 },
  { name: "PyTorch", level: 4 },
  { name: "Flask", level: 4 },
  { name: "TypeScript", level: 4 },
  { name: "React", level: 3 },
  { name: "Next.js", level: 3 },
  { name: "TailwindCSS", level: 3 },
  { name: "TensorFlow", level: 3 },
  { name: "Electron", level: 2 },
  { name: "C", level: 2 },
  { name: "C#", level: 2 },
].sort((a, b) => b.level - a.level);

const projects = [
  {
    name: "Portfolio Website",
    link: "#",
    usedSkills: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Team Crescendo Websites",
    link: "#",
    usedSkills: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  },
  { name: "Memoria Wake", link: "#", usedSkills: ["C#", "Unity", "Blender"] },
];

// === SKILL BUBBLE ===
function SkillBubble({ skill }: { skill: { name: string; level: number } }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col gap-1 items-center justify-center p-2 diagonal-cut-8 bg-cyan-400/20 hover:bg-cyan-400/40 transition-all"
    >
      <div className="flex space-x-1 mb-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${
              i < skill.level ? "bg-cyan-400" : "bg-neutral-800"
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-gray-200">{skill.name}</span>
    </motion.div>
  );
}

// === PROJECT BUBBLE ===
function ProjectBubble({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout className="w-full flex flex-col gap-1">
      <motion.button
        onClick={() => setExpanded(!expanded)}
        layout
        whileHover={{ scale: 1.02 }}
        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
        className="diagonal-cut-8 w-full py-2 px-2 flex flex-col gap-2 bg-cyan-400/25 hover:bg-cyan-400/40 text-xs text-gray-200 font-semibold text-left relative"
      >
        <div className="flex items-center min-h-[1.5rem]">{project.name}</div>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="content"
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-1">
                {project.usedSkills.map((s) => (
                  <div
                    key={s}
                    className="px-3 py-1 rounded-md bg-cyan-400/20 hover:bg-cyan-400/40 text-xs text-gray-200"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

// === MAIN ABOUT SECTION ===
export default function About() {
  const { ref } = useSectionInView("about");

  return (
    <section
      ref={ref}
      className="p-6 md:p-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
    >
      {/* LEFT: About Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-start space-y-4 bg-white/10 p-6 rounded-md shadow-[0_0_12px_rgba(34,211,238,0.15)] border border-cyan-400/20 backdrop-blur-sm"
      >
        <div className="flex items-center mb-4">
          <div className="w-1 h-full bg-cyan-300 mr-4" />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-1">
              Christopher Setiabudi
            </h1>
            <h2 className="text-lg md:text-xl text-cyan-300 font-light">
              AI / ML Engineer & Front-End Developer
            </h2>
          </div>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          I&apos;m Chris, a Senior in Artificial Intelligence at Carnegie Mellon
          University. I enjoy building smooth, efficient systems, whether it&apos;s a
          sleek web app or a robust machine learning pipeline.
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          I have much experience working in the front-end, with React and
          Next.js, integrating databases and APIs to create seamless user
          experiences. On the AI/ML side, I&apos;ve built, trained, and deployed
          models using PyTorch and TensorFlow, particularly in computer vision
          and natural language processing. I&apos;ve also built webapps that
          integrate AI, combining my skills in both areas.
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Outside of code, I love reading fiction, gaming, running, and learning
          more about AI and web development. I&apos;m also bridging the gap in my
          full-stack skills by learning back-end technologies.
        </p>
      </motion.div>

      {/* RIGHT: Links + Widgets + Skills/Projects */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-[1fr_2fr] gap-4"
      >
        {/* LINKS + WIDGETS (stacked left col) */}
        <div className="flex flex-col gap-4">
          {/* LINKS */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 p-4 rounded-md border border-cyan-400/20 shadow-[0_0_8px_rgba(34,211,238,0.1)] flex flex-col gap-4 items-center"
          >
            <h3 className="text-cyan-300 font-bold text-sm tracking-widest mr-auto">
              LINKS
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Christophers27"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={24}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/christophersetiabudi/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                />
              </a>
              <a href="mailto:christophersetiabudi@gmail.com">
                <BiLogoGmail
                  size={24}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                />
              </a>
            </div>
          </motion.div>

          {/* WIDGETS */}
          <Widgets />
        </div>

        {/* SKILLS + PROJECTS */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
          className="bg-white/10 p-4 rounded-md border border-cyan-400/20 shadow-[0_0_8px_rgba(34,211,238,0.15)]"
        >
          <h3 className="text-cyan-300 font-bold text-sm tracking-widest">
            SKILLS
          </h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {skills.map((s) => (
              <SkillBubble key={s.name} skill={s} />
            ))}
          </div>

          <h3 className="text-cyan-300 font-bold text-sm tracking-widest mt-5">
            PROJECTS
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            {projects.map((p) => (
              <ProjectBubble key={p.name} project={p} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
