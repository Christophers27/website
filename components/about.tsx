"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

export default function About() {
  const { ref } = useSectionInView("about");

  return (
    <div className="" ref={ref}>
      About
    </div>
  );
}
