"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { FiArrowRight } from "react-icons/fi";

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

export default function ContactSection() {
  const { ref } = useSectionInView("contact", 0.25);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex w-full items-center justify-center py-24"
    >
      <motion.div
        className="flex w-full flex-col gap-12 md:flex-row md:items-start md:justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Section Title */}
        <div className="md:w-1/5">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl font-thin uppercase tracking-widest text-neutral-100"
              variants={revealVariants}
            >
              04. Contact
            </motion.h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex w-full max-w-prose flex-col gap-8">
          <motion.div variants={revealVariants}>
            <p className="text-lg font-thin text-neutral-300">
              I&apos;m always open to new opportunities and collaborations. If
              you think I&apos;d be a good fit for your team or just want to say
              hi, feel free to send me an email.
            </p>
          </motion.div>

          <motion.div variants={revealVariants}>
            <a
              href="mailto:christophersetiabudi@gmail.com" 
              className="
                group
                flex w-fit items-center gap-4
                border border-neutral-400 px-8 py-3 
                text-lg font-light text-neutral-300 
                transition-colors hover:border-cyan-300 hover:text-cyan-300
              "
            >
              Get In Touch
              <motion.div className="transition-transform group-hover:translate-x-2">
                <FiArrowRight />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
