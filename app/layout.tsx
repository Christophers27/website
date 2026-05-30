import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/VersionSwitcher";
import ScrollArea from "@/components/ScrollArea";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-var" });

export const metadata: Metadata = {
  title: "Christopher Setiabudi | AI & Full-Stack Engineer",
  description: "Personal website of Christopher Setiabudi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased h-full`}>
      <body className="h-full overflow-hidden font-sans">
        <ThemeProvider>
          <ScrollArea className="h-full" thumbColor="bg-ink/40">
            {children}
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
