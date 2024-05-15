"use client";

import React, { useEffect } from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About")

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I've just finished my 2nd year at Carnegie Mellon University, majoring in{" "}
        <span className="font-bold">Artificial Intelligence</span>. I've taken a
        variety of courses in{" "}
        <span className="italic">
          computer systems, data structures, and algorithms
        </span>
        , as well as{" "}
        <span className="italic">machine learning and AI ethics</span>. I've
        also been involved in a few{" "}
        <span className="font-bold">research projects</span> at{" "}
        <span className="font-bold">AirLab</span>, where I've worked on{" "}
        <span className="italic">machine learning and computer vision</span>.
        I'm currently trying out the various subfields of AI to see what I'm
        most interested in.
      </p>
      <p>
        In my free time, I enjoy working on{" "}
        <span className="italic">personal projects</span> (like this website!),
        reading and writing <span className="italic">fiction</span>, and playing{" "}
        <span className="italic">video games</span>. I'm also a big fan of anime
        and manga, and I love exploring the fascinating worldbuilding in various
        stories.
      </p>
    </motion.section>
  );
}
