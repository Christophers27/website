"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { skills } from "@/lib/data";

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

export default function AboutSection() {
  const { ref } = useSectionInView("about", 0.25);

  return (
    <section
      id="about"
      className="flex w-full items-center justify-center pb-24"
      ref={ref}
    >
      <motion.div
        className="flex w-full flex-col gap-12 md:flex-row md:items-start md:justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Section Title */}
        <div className="md:w-fit">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl font-thin uppercase tracking-widest text-neutral-100 md:[writing-mode:sideways-lr] border-l-2 pl-4 md:pl-0 md:border-l-0 md:border-r-2"
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
                Hey, I&apos;m Chris, a senior at{" "}
                <span className="font-light">Carnegie Mellon</span> studying
                <span className="font-light"> Artificial Intelligence</span>.
                While my coursework is deep in AI, from computer vision to NLP,
                I&apos;m equally passionate and self-taught in{" "}
                <span className="font-light">front-end</span> development and
                building great user experiences with tools like React and
                Next.js. I&apos;ve combined these interests at a{" "}
                <a
                  className="font-light text-cyan-200 transition hover:text-cyan-300 hover:underline"
                  href="#projects"
                >
                  startup
                </a>{" "}
                I co-founded, where I built a desktop app that used AI to help
                manage user procrastination. I&apos;m interested in any
                opportunities involving either AI or front-end development, and
                especially both! Please feel free to{" "}
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
                When I&apos;m not coding, you&apos;ll probably find me writing
                or programming for my indie game project,{" "}
                <a
                  className="font-light text-cyan-200 transition hover:text-cyan-300 hover:underline"
                  href="#projects"
                >
                  Memoria Wake
                </a>
                , or reading a good book with a cup of coffee. I&apos;m a huge
                sci-fi and Warhammer 40k fan, and I also spend a lot of time
                jogging, and lately, climbing.
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
              className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-neutral-300 2xl:grid-cols-3"
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
                  <div className="relative flex w-full cursor-pointer flex-col rounded-full border border-neutral-300 bg-neutral-800/25 px-4 py-2">
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
