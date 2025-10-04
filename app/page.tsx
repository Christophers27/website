"use client";

import About from "@/components/about";
import Cursor from "./cursor";

export default function HeroAbout() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden flex items-center cursor-none">
      {/* Cursor */}
      <Cursor />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#737373_2px,transparent_1px),linear-gradient(to_bottom,#737373_2px,transparent_1px)] bg-[length:160px_160px] bg-[position:79px_79px] opacity-100 animate-line-grid-move" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_6%,#0a0a0a_7%,#0a0a0a_80%,transparent_81%)] bg-[length:160px_160px] bg-[position:-0.2px_-0.2px] opacity-100 animate-line-mask-move" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1.5px,_transparent_1.5px)] bg-[length:32px_32px] animate-dot-grid-move" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col w-full min-h-screen">
        <About />
      </div>
    </main>
  );
}
