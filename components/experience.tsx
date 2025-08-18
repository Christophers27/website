"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("experience");

  return (
    <div className="" ref={ref}>
      Experience
    </div>
  );
}
