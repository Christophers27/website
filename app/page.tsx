// page.tsx
import Sidebar from "@/components/sidebar";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ExperienceSection from "@/components/experienceSection";
import ContactSection from "@/components/contactSection";
import GridBackground from "./gridBackground";

export default function Home() {
  return (
    <main className="h-screen p-4 md:p-8">
      <div className="relative flex h-full w-full flex-col gap-8 overflow-y-auto rounded-xl border border-neutral-800 p-4 md:flex-row md:gap-16 md:overflow-y-hidden md:p-8">
        <GridBackground />

        <Sidebar />

        <div className="relative z-0 flex-1 md:overflow-y-auto no-scrollbar">
          <AboutSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
