"use client";

import React from "react";
import { motion } from "motion/react";

export default function TypeEffect({ text, classes }: { text: string; classes?: string }) {
  return (
    <motion.span
      className={`whitespace-nowrap ${classes}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 2 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.01 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
