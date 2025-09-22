"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function About() {
  const { ref } = useSectionInView("about");

  const [currentTime, setCurrentTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate system activity
      setCpuUsage(Math.floor(Math.random() * 30) + 15);
      setRamUsage(Math.floor(Math.random() * 20) + 60);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/50 backdrop-blur-sm border border-blue-300/50 p-8 clip-corner-lg">
              <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider">
                {">"} ACCESSING_PROFILE
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                MACHINE<span className="text-blue-600">_</span>LEARNING
                <br />
                ENGINEER
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I&apos;m a fourth-year AI undergrad at Carnegie Mellon
                University, where I focus on building systems that make
                technology feel intuitive and impactful. I&apos;ve trained
                models ranging from computer vision networks to LLMs, and I
                enjoy exploring how AI can enhance productivity and improve
                daily life. Along the way, I&apos;ve worked at Credit Karma as a
                software engineer, built Lock-in App to help tackle
                procrastination, and spent the past two years developing an
                indie game with friends. Outside of tech, I&apos;m a big fan of
                anime and games - they inspire the creativity I bring into my
                work, including this game-like portfolio site!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50/50 border border-blue-200/50 p-4 clip-corner">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">
                    Years Working with AI
                  </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-200/50 p-4 clip-corner">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-black text-white font-medium tracking-wider hover:bg-gray-800 transition-colors clip-corner">
                  VIEW_PROJECTS
                </button>
                <Link
                  className="clip-corner"
                  href="/Resume v1.0.2.pdf"
                  download
                >
                  <button className="px-8 py-4 border-2 border-black font-medium tracking-wider hover:bg-black hover:text-white transition-colors clip-corner">
                    DOWNLOAD_RESUME
                  </button>
                </Link>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/40 backdrop-blur-sm border border-blue-200/50 p-8 clip-corner-lg">
              <h3 className="text-xl font-bold mb-6 tracking-wide text-blue-600">
                PRIMARY_STACK
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "TailwindCSS",
                  "Python",
                  "PyTorch",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-blue-50/60 border border-blue-200/50 p-3 clip-corner hover:bg-blue-100/60 transition-colors cursor-pointer group"
                  >
                    <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Panel */}
          <div className="space-y-6">
            <div className="bg-white/40 backdrop-blur-sm border border-blue-200/50 p-6 clip-corner-lg">
              <h3 className="text-sm font-bold mb-6 tracking-wider text-blue-600">
                SYSTEM_INFO
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">LOCAL_TIME</span>
                    <span className="text-xs">
                      {currentTime.toLocaleTimeString()}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">SYSTEM_LOAD</span>
                    <span className="text-xs">{cpuUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded">
                    <div
                      className="bg-blue-600 h-1 rounded transition-all duration-1000"
                      style={{ width: `${cpuUsage}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">MEMORY_USAGE</span>
                    <span className="text-xs">{ramUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded">
                    <div
                      className="bg-green-600 h-1 rounded transition-all duration-1000"
                      style={{ width: `${ramUsage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/40 backdrop-blur-sm border border-blue-200/50 p-6 clip-corner-lg">
              <h3 className="text-sm font-bold mb-4 tracking-wider text-blue-600">
                QUICK_ACCESS
              </h3>
              <div className="space-y-3 flex flex-col">
                <Link
                  className="w-full p-3 bg-blue-50/60 clip-corner border border-blue-200/50 text-left text-sm font-medium hover:bg-blue-100/60 transition-colors"
                  href="/Resume v1.0.2.pdf"
                  download
                >
                  <Terminal size={16} className="inline mr-2" />
                  RESUME.PDF
                </Link>
                <Link
                  className="w-full p-3 bg-blue-50/60 border border-blue-200/50 text-left text-sm font-medium hover:bg-blue-100/60 transition-colors clip-corner"
                  href="https://github.com/Christophers27"
                  target="_blank"
                >
                  <Github size={16} className="inline mr-2" />
                  GITHUB_PROFILE
                </Link>
                <Link
                  className="w-full p-3 bg-blue-50/60 border border-blue-200/50 text-left text-sm font-medium hover:bg-blue-100/60 transition-colors clip-corner"
                  href="https://www.linkedin.com/in/christophersetiabudi/"
                  target="_blank"
                >
                  <Linkedin size={16} className="inline mr-2" />
                  LINKEDIN_PROFILE
                </Link>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="bg-white/40 backdrop-blur-sm border border-blue-200/50 p-6 clip-corner-lg">
              <h3 className="text-sm font-bold mb-4 tracking-wider text-blue-600">
                STATUS
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">AVAILABILITY</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-xs">OPEN_TO_WORK</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">LOCATION</span>
                  <span className="text-xs">PITTSBURGH/WILLING_TO_MOVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">RESPONSE_TIME</span>
                  <span className="text-xs">{"<"} 24H</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
