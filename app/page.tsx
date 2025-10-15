import Sidebar from "@/components/sidebar";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ExperienceSection from "@/components/experienceSection";
import ContactSection from "@/components/contactSection";
import GridBackground from "./gridBackground";

export default function Home() {
  return (
    <main className="h-screen p-4 md:p-8">
      <div className="relative flex h-full w-full transform flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/50 p-4 backdrop-blur-sm gap-4 md:flex-row md:gap-8 md:p-8 lg:gap-12 xl:gap-16">
        <GridBackground />

        <Sidebar />

        <div className="relative z-0 flex-1 overflow-y-auto no-scrollbar">
          <AboutSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
