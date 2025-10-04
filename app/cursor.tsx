"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full bg-cyan-300/20 border border-cyan-300/40 mix-blend-screen"
      style={{
        transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`,
      }}
    />
  );
}
