"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useSectionContext } from "@/context/sectionContext";

const navLinks = [
  { href: "#about", label: "01. About", section: "about" },
  { href: "#projects", label: "02. Projects", section: "projects" },
  { href: "#experience", label: "03. Experience", section: "experience" },
  { href: "#contact", label: "04. Contact", section: "contact" },
];

export default function Sidebar() {
  const { activeSection } = useSectionContext();

  return (
    <aside className="w-full md:sticky md:top-0 md:h-full md:max-w-xs md:flex-shrink-0 lg:max-w-sm xl:max-w-md">
      <nav className="flex flex-col gap-16 md:h-full md:justify-between">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-thin text-neutral-50 md:text-5xl xl:text-6xl">
            Christopher Setiabudi
          </h1>
          <h2 className="mt-4 text-lg font-light text-neutral-400 md:text-xl">
            Software Engineer | 4th Year AI Undergraduate
          </h2>
          <p className="mt-6 text-sm text-neutral-500">
            Developing clean, user-focused digital experiences from the ground up.
          </p>
        </div>

        {/* Navigation */}
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.section}>
              <a href={link.href} className="group flex items-center gap-4">
                <motion.div
                  className={`h-px transition-colors group-hover:bg-cyan-400 ${
                    activeSection === link.section
                      ? "w-16 bg-cyan-300"
                      : "w-8 bg-neutral-600"
                  }`}
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
        </ul>

        {/* Footer */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Christophers27"
            target="_blank"
            aria-label="GitHub"
            className="text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/christophersetiabudi/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <FiLinkedin size={22} />
          </a>
        </div>
      </nav>
    </aside>
  );
}
