"use client";

import { createContext, useState, ReactNode, useContext } from "react";

export type Section = "about" | "projects" | "experience" | "contact";

type SectionContextType = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionContextProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context)
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider"
    );
  return context;
}
