// components/sidebar.tsx
"use client";

import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useSectionContext } from "@/context/sectionContext";

const navLinks = [
  { href: "#about", label: "01. About", section: "about" },
  { href: "#projects", label: "02. Projects", section: "projects" },
  { href: "#experience", label: "03. Experience", section: "experience" },
  { href: "#contact", label: "04. Contact", section: "contact" },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants: Variants = {
  active: {
    width: "4rem",
    backgroundColor: "#67e8f9", // cyan-300
  },
  inactive: {
    width: "2rem",
    backgroundColor: "#525252", // neutral-600
  },
};

export default function Sidebar() {
  const { activeSection } = useSectionContext();

  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

  return (
    <aside className="w-full md:sticky md:top-0 md:h-full md:max-w-xs md:flex-shrink-0 lg:max-w-sm xl:max-w-md">
      <motion.nav
        className="flex h-full flex-col gap-16 md:justify-between"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Header */}
        <motion.div variants={revealVariants}>
          <h1 className="text-4xl font-thin text-neutral-50 md:text-5xl xl:text-6xl">
            Christopher Setiabudi
          </h1>
          <h2 className="mt-4 text-lg font-light text-neutral-400 md:text-xl">
            Software Engineer | 4th Year AI Undergraduate
          </h2>
          <p className="mt-6 text-sm text-neutral-500">
            Developing clean, user-focused digital experiences from the ground
            up.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.ul variants={revealVariants} className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.section}>
              <a href={link.href} className="group flex items-center gap-4">
                <motion.div
                  className="h-px group-hover:bg-cyan-400"
                  variants={lineVariants}
                  animate={
                    activeSection === link.section ? "active" : "inactive"
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-neutral-200 ${
                    activeSection === link.section
                      ? "text-neutral-200"
                      : "text-neutral-500"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Footer */}
        <motion.div variants={revealVariants} className="flex flex-col gap-2">
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/Christophers27"
              target="_blank"
              aria-label="GitHub"
              className="text-neutral-400 transition-colors hover:text-cyan-400"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <FiGithub size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/christophersetiabudi/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-neutral-400 transition-colors hover:text-cyan-400"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <FiLinkedin size={22} />
            </motion.a>
            <div className="ml-auto text-sm text-neutral-500">
              © {new Date().getFullYear()} Christopher Setiabudi
            </div>
          </div>
          <div className="h-px w-full rounded-full bg-neutral-700" />
        </motion.div>
      </motion.nav>
    </aside>
  );
}
