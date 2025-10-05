"use client";

import { useSectionContext } from "@/context/sectionContext";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useSectionContext();

  return (
    <div
      className={`z-20 h-screen border-r border-white flex-shrink-0 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="p-4">
        {isOpen ? (
          <div className="space-y-4">
            <div className="text-2xl font-semibold">MENU</div>
            <nav className="flex flex-col space-y-2">
              <a className={`${activeSection === "about" ? "underline" : ""}`}>About</a>
              <a className={`${activeSection === "projects" ? "underline" : ""}`}>Projects</a>
              <a className={`${activeSection === "experience" ? "underline" : ""}`}>Experience</a>
            </nav>
          </div>
        ) : (
          <div className="text-center text-sm rotate-90 mt-8 tracking-widest">
            MENU
          </div>
        )}
      </div>
    </div>
  );
}
