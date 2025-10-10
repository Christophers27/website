import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SectionContextProvider } from "@/context/sectionContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Setiabudi | Software Engineer",
  description:
    "Portfolio website of Christopher Setiabudi, a fourth-year artificial intelligence student at Carnegie Mellon University and front-end software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-950 text-white`}
      >
        <SectionContextProvider>{children}</SectionContextProvider>
      </body>
    </html>
  );
}
