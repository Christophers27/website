"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
];

const revealVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="flex w-full items-center justify-center">
      <motion.div
        className="flex w-full flex-col gap-8 md:flex-row md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Section Title */}
        <div className="md:w-1/4">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl font-thin uppercase tracking-widest text-neutral-100"
              variants={revealVariants}
            >
              01. About
            </motion.h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col">
          <div className="space-y-4 text-lg text-neutral-200">
            <div className="overflow-hidden font-thin">
              <motion.p variants={revealVariants}>
                Hello! I'm Christopher, a{" "}
                <span className="font-light">software engineer</span> with a
                passion for creating sharp, intuitive, and high-performance
                digital experiences. My journey into tech began at Carnegie
                Mellon University, where I'm currently a fourth-year
                undergraduate diving deep into the world of Artificial
                Intelligence.
              </motion.p>
            </div>
            <div className="overflow-hidden font-thin">
              <motion.p variants={revealVariants}>
                My focus is on front-end development, where I enjoy the
                challenge of translating complex problems into elegant,
                user-friendly interfaces. I'm driven by a love for clean code,
                minimalist design, and the endless pursuit of the perfect user
                interaction.
              </motion.p>
            </div>
          </div>

          {/* Skills List */}
          <div className="overflow-hidden">
            <motion.div variants={revealVariants}>
              <div className="flex items-center my-4">
                <div className="h-[0.5px] w-full bg-white rounded" />
                <span className="px-2 font-light">Skills</span>
                <div className="h-[0.5px] w-full bg-white rounded" />
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-500">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
