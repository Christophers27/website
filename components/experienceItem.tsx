"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react"; // Corrected import
import { FiChevronDown } from "react-icons/fi";
import { experienceData } from "@/lib/data"; // Sourcing from lib/data.ts
type Experience = (typeof experienceData)[0];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ExperienceItem({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={revealVariants}
      // This is the borderless, typography-heavy style
      className="group w-full pb-8"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex flex-col w-full items-start justify-between text-left"
      >
        {/* Header Content */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-thin tracking-wider text-neutral-100 transition-colors group-hover:text-cyan-300">
              {experience.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pt-1"
          >
            <FiChevronDown className="text-neutral-400" />
          </motion.div>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-lg font-thin text-neutral-300">
            {experience.company}
          </span>
          <span className="text-lg font-thin text-neutral-300">
            {experience.date}
          </span>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="pt-6">
              {/* Bullet Points */}
              <ul className="list-outside list-disc space-y-2 pl-4">
                {experience.description.map((point, i) => (
                  <li key={i} className="text-base font-thin text-neutral-300">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 pt-6">
                {experience.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-cyan-900/50 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
