"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const skills = [
  { name: "Python", skill: 5 },
  { name: "PyTorch", skill: 4 },
  { name: "TypeScript", skill: 4 },
  { name: "React", skill: 4 },
  { name: "Next.js", skill: 4 },
  { name: "Computer Vision", skill: 4 },
  { name: "Machine Learning", skill: 4 },
  { name: "Deep Learning", skill: 4 },
  { name: "Node.js", skill: 3 },
  { name: "Tailwind CSS", skill: 3 },
  { name: "Electron", skill: 3 },
  { name: "C#", skill: 3 },
  { name: "Git & GitHub", skill: 5 },
  { name: "TensorFlow", skill: 3 },
  { name: "Language Models", skill: 3 },
  { name: "Framer Motion", skill: 2 },
  { name: "SQLite", skill: 2 },
  { name: "Unity", skill: 2 },
  { name: "Blender", skill: 1 },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center pb-24"
    >
      <motion.div
        className="flex w-full flex-col gap-12 md:flex-row md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Section Title */}
        <div className="md:w-1/4 md:min-w-fit ml-auto">
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
        <div className="flex max-w-prose flex-col">
          <div className="space-y-4 text-lg text-neutral-200">
            <div className="overflow-hidden font-thin">
              <motion.p variants={revealVariants}>
                Hey, I'm Chris, a senior at{" "}
                <span className="font-light">Carnegie Mellon</span> studying
                <span className="font-light"> Artificial Intelligence</span>.
                While my coursework is deep in AI, from computer vision to NLP,
                I'm equally passionate and self-taught in{" "}
                <span className="font-light">front-end</span> development and
                building great user experiences with tools like React and
                Next.js. I've combined these interests at a{" "}
                <a
                  className="font-light text-cyan-200 transition hover:text-cyan-300 hover:underline"
                  href="#projects"
                >
                  startup
                </a>{" "}
                I co-founded, where I built a desktop app that used AI to help
                manage user procrastination. I'm interested in any opportunities
                involving either AI or front-end development, and especially
                both! Please feel free to{" "}
                <a
                  className="font-light text-cyan-200 transition hover:text-cyan-300 hover:underline"
                  href="#contact"
                >
                  reach out
                </a>
                .
              </motion.p>
            </div>
            <div className="overflow-hidden font-thin">
              <motion.p variants={revealVariants}>
                When I'm not coding, you'll probably find me writing or
                programming for my indie game project,{" "}
                <a
                  className="font-light text-cyan-200 transition hover:text-cyan-300 hover:underline"
                  href="#projects"
                >
                  Memoria Wake
                </a>
                , or reading a good book with a cup of coffee. I'm a huge sci-fi
                and Warhammer 40k fan, and I also spend a lot of time jogging,
                and lately, climbing.
              </motion.p>
            </div>
          </div>

          {/* Skills List */}
          <motion.div variants={revealVariants}>
            <div className="my-8 flex items-center">
              <div className="h-[0.5px] w-full rounded-full bg-neutral-300" />
              <span className="px-8 font-light">Skills</span>
              <div className="h-[0.5px] w-full rounded-full bg-neutral-300" />
            </div>
            <motion.ul
              className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-neutral-300 xl:grid-cols-3"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="flex items-center gap-2"
                  variants={revealVariants}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="relative flex w-full cursor-pointer flex-col rounded-full border border-neutral-300 bg-neutral-950/25 px-4 py-2">
                    <div className="absolute right-4 top-1 flex flex-row-reverse gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-1 rounded-full ${
                            i < skill.skill ? "bg-cyan-300" : "bg-neutral-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
