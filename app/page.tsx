"use client";

import VersionSwitcher, { useTheme } from "@/components/VersionSwitcher";
import RetroLayout from "@/components/RetroLayout";
import MinimalLayout from "@/components/MinimalLayout";

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <main className="max-w-7xl mx-auto w-full p-4 md:p-8">
      {theme === "minimal" ? (
        <MinimalLayout switcher={<VersionSwitcher variant="minimal" />} />
      ) : (
        <RetroLayout switcher={<VersionSwitcher variant="retro" />} />
      )}
    </main>
  );
}
