"use client";

import React, { useState, useEffect } from "react";

export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const maskStyle = {
    maskImage: `radial-gradient(circle 150px at ${mousePosition.x - 32}px ${mousePosition.y - 32}px, white, transparent)`,
    WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x - 32}px ${mousePosition.y - 32}px, white, transparent)`,
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0.5px,_transparent_0.5px)] bg-[length:8px_8px]" />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.30)_0.5px,_transparent_0.5px)] bg-[length:8px_8px]"
        style={maskStyle}
      />
    </div>
  );
}