"use client";

import { Section, useSectionContext } from "@/context/sectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(section: Section, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useSectionContext();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
      console.log(`Section in view: ${section}`);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return { ref };
}
