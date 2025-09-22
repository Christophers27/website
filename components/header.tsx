"use client";

import React from "react";
import { useSectionContext } from "@/context/sectionContext";
import { sections, type Section } from "@/context/sectionContext";

export default function Header() {
  const { activeSection, setActiveSection } = useSectionContext();

  return (
    <nav className="fixed top-0 w-full bg-blue-50/50 backdrop-blur-sm border-b border-gray-300 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">
            CHRISTOPHER_SETIABUDI
          </div>
          <div className="flex space-x-8">
            {sections.map((item) => (
              <button
                key={item}
                className="relative px-4 py-2 text-sm font-medium tracking-wider hover:text-blue-600 transition-colors group"
                onClick={() => setActiveSection(item.toLowerCase() as Section)}
              >
                {item.toUpperCase()}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
