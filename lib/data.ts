import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuSchool2 } from "react-icons/lu";
import scottyconImg from "@/public/scottycon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started university",
    location: "Pittsburgh, PA",
    description:
      "I was accepted into Carnegie Mellon University, and am now majoring in Artificial Intelligence.",
    icon: React.createElement(LuSchool2),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "ScottyCon",
    description:
      "A digital booklet website for an anime & games convention. It has a map, schedule, and search functionality.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: scottyconImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Python",
  "PyTorch",
  "Tensorflow",
] as const;
