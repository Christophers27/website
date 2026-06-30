import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/VersionSwitcher";
import ScrollArea from "@/components/ScrollArea";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-var" });

export const metadata: Metadata = {
  title: "Christopher Setiabudi | AI & Full-Stack Engineer",
  description:
    "Portfolio of Christopher Setiabudi — AI Engineer and Full-Stack Developer, B.S. in Artificial Intelligence from Carnegie Mellon. Specializing in machine learning, computer vision, and full-stack web applications.",
  metadataBase: new URL("https://christopher-setiabudi.dev"),
  openGraph: {
    type: "website",
    url: "https://christophe-setiabudi.dev",
    title: "Christopher Setiabudi | AI & Full-Stack Engineer",
    description:
      "Portfolio of Christopher Setiabudi — AI Engineer and Full-Stack Developer, B.S. in Artificial Intelligence from Carnegie Mellon.",
    siteName: "Christopher Setiabudi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Setiabudi | AI & Full-Stack Engineer",
    description:
      "Portfolio of Christopher Setiabudi — AI Engineer and Full-Stack Developer, B.S. in Artificial Intelligence from Carnegie Mellon.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
