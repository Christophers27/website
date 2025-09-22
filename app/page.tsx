"use client";

import About from "@/components/about";
import React, { useEffect, useRef } from "react";

export default function Page() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 19.5}px`;
        cursorRef.current.style.top = `${e.clientY - 19.5}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #000 1px, transparent 1px),
              radial-gradient(circle at center, #3b82f6 2px, transparent 2px)
            `,
            backgroundSize: "20px 20px, 100px 100px",
            backgroundPosition: "0 0, 0 0",
          }}
        />
      </div>

      {/* Mouse Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transform-gpu"
        style={{ willChange: "transform" }}
      />

      {/* Main Content */}
      <About />
    </main>
  );
}
