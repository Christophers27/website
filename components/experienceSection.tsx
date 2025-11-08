"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { experienceData } from "@/lib/data";
import { ExperienceItem } from "./experienceItem";

const revealVariants: Variants = {
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

export default function ExperienceSection() {
  const { ref } = useSectionInView("experience", 0.25);

  return (
    <section
      id="experience"
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
              variants={revealVariants}
            >
              03. Experience
            </motion.h2>
          </div>
        </div>

        {/* Experience List */}
        <motion.div
          className="flex w-full max-w-prose flex-col divide-y gap-4 divide-neutral-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {experienceData.map((exp) => (
            <ExperienceItem key={exp.title} experience={exp} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
