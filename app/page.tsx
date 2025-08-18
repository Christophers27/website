import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex max-w-7xl mx-auto">
      <Sidebar />
      <div className="w-2/3">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
