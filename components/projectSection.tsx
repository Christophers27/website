"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { projectsData } from "@/lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const panelWipeVariant: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delayChildren: 0.6,
    },
  },
};
const contentFadeVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProjectSection() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      id="projects"
      ref={ref}
      className="flex w-full items-center justify-center pb-24"
    >
      <motion.div
        className="flex w-full flex-col gap-12 md:flex-row md:items-start md:justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <div className="md:w-fit">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl font-thin uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2"
              variants={projectItemVariant}
            >
              02. Projects
            </motion.h2>
          </div>
        </div>

        {/* Project List */}
        <motion.div
          className="flex w-full max-w-prose flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projectsData.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectItem({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <motion.div
      className="flex w-full flex-col gap-8 md:flex-row md:items-start"
      variants={projectItemVariant}
    >
      <div>
        <motion.div
          className="group relative flex flex-col gap-4 border-l-2 border-neutral-300 bg-neutral-700/25 px-6 py-4 transition-colors hover:border-neutral-200"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          variants={panelWipeVariant}
        >
          <motion.div
            className="flex flex-col gap-4"
            variants={contentFadeVariant}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extralight tracking-wider text-neutral-100 transition-colors group-hover:text-cyan-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-neutral-400">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    aria-label="GitHub"
                    className="transition hover:text-cyan-300"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    aria-label="Live site"
                    className="transition hover:text-cyan-300"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-md font-thin text-neutral-200">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-cyan-900/50 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}