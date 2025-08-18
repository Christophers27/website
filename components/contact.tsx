"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <div className="" ref={ref}>
      Contact
    </div>
  );
}
