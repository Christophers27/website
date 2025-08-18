"use client";

import { useSectionContext } from "@/context/sectionContext";
import React from "react";

export default function Sidebar() {
  const { activeSection } = useSectionContext();

  return (
    <header className="sticky top-0 max-h-screen w-1/3 p-8">
      <div className="flex flex-col rounded-4xl p-4 border-2 h-full border-sky-600">
        <h1 className="">Christopher Setiabudi</h1>
        <h2 className="">
          4th-Year Artificial Intelligence Undergraduate at Carnegie Mellon
          University
        </h2>
        <p className="">
          I build, train, and deploy AI systems, develop websites and web-apps,
          and work on games.
        </p>
        <div className="">
          <h3 className={`${activeSection === "about" ? "font-bold" : ""}`}>
            About
          </h3>
          <h3 className={`${activeSection === "projects" ? "font-bold" : ""}`}>
            Projects
          </h3>
          <h3
            className={`${activeSection === "experience" ? "font-bold" : ""}`}
          >
            Experience
          </h3>
          <h3 className={`${activeSection === "contact" ? "font-bold" : ""}`}>
            Contact
          </h3>
        </div>
      </div>
    </header>
  );
}
