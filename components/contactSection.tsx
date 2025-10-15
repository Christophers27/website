"use client";

import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ContactSection() {
  const { ref } = useSectionInView("contact", 0.25);

  return (
    <div className="h-screen" id="contact" ref={ref}>
      ContactSection
    </div>
  );
}
