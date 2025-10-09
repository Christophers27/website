"use client";

import About from "@/components/about";
import Cursor from "./cursor";
import GridBackground from "./gridBackground";
import Sidebar from "@/components/sidebar";

export default function HeroAbout() {
  return (
    <main className="relative min-h-[200vh] bg-neutral-950 text-white flex cursor-none">
      <Cursor />
      <GridBackground />

      <Sidebar />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto flex flex-col min-h-screen">
        <About />
      </div>
    </main>
  );
}
