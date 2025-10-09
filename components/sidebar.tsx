"use client";

import { useSectionContext } from "@/context/sectionContext";
import React, { useState } from "react";
import { motion } from "motion/react";
import TypeEffect from "./typeEffect";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useSectionContext();

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
  ];

  return (
    <motion.nav
      layout
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`z-20 sticky top-0 h-screen border-r border-white/10 backdrop-blur-xs bg-white/5 
                 shadow-[inset_0_0_8px_rgba(255,255,255,0.15)] transition-all duration-300 
                 ease-in-out flex flex-col justify-between ${
                   isOpen ? "w-48" : "w-16"
                 }`}
    >
      {/* --- TOP SECTION --- */}
      <div className="relative flex flex-col space-y-6 items-start">
        {/* Status Indicator */}
        <div className="flex items-center h-6 space-x-2 m-6">
          <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
          {isOpen && (
            <TypeEffect
              text="ONLINE"
              classes="font-light tracking-widest text-lg ml-2"
            />
          )}
        </div>

        {/* --- NAV LINKS --- */}
        <div className="flex flex-col space-y-3 font-mono text-sm w-full ml-3">
          {navItems.map((item, i) => {
            const active = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ x: isOpen ? 3 : 0 }}
                className="relative flex items-center group cursor-none"
              >
                {/* Section Marker Box */}
                <motion.div
                  layout
                  className={`diagonal-cut-8 flex items-center font-bold transition-all duration-300 px-3.5 overflow-hidden h-6
                    ${isOpen ? "w-40" : "w-10"}
                    ${
                      active
                        ? "bg-cyan-400/50 text-cyan-200 shadow-[0_0_8px_#22d3ee]"
                        : "bg-cyan-400/25 text-cyan-500 group-hover:bg-cyan-400/40 group-hover:text-cyan-300"
                    }`}
                >
                  {/* Number */}
                  <span className="flex-shrink-0 w-5 text-xs">{`0${
                    i + 1
                  }`}</span>

                  {/* Label - typing animation */}
                  {isOpen && (
                    <TypeEffect
                      text={"| " + item.label}
                      classes="ml-1 whitespace-nowrap tracking-widest text-sm font-light"
                    />
                  )}
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM INFO BAR --- */}
      <motion.div className="text-[10px] px-2 text-gray-400/70 font-mono text-center mb-4">
        SYS ACTIVE — <span className="text-cyan-400">v1.0.0</span>
      </motion.div>
    </motion.nav>
  );
}
