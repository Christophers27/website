"use client";

import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`z-20 h-screen border-r border-white flex-shrink-0 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="p-4">
        {isOpen ? (
          <div className="space-y-4">
            <div className="text-2xl font-semibold">MENU</div>
            <nav className="flex flex-col space-y-2">
              <a className="hover:underline">Home</a>
              <a className="hover:underline">About</a>
            </nav>
          </div>
        ) : (
          <div className="text-center text-sm rotate-90 mt-8 tracking-widest">
            MENU
          </div>
        )}
      </div>
    </div>
  );
}
