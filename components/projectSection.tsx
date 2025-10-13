"use client";

import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ProjectSection() {
  const {ref} = useSectionInView("projects")

  return <div className="h-screen" id="projects" ref={ref}>ProjectSection</div>;
}
