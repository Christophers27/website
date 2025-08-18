"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

export default function Projects() {
  const { ref } = useSectionInView("projects");

  return (
    <div className="" ref={ref}>
      Projects
    </div>
  );
}
