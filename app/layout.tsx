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
    "Portfolio website of Christopher Setiabudi, a software engineer with expertise in AI/ML training and deployment, and front-end development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SectionContextProvider>{children}</SectionContextProvider>
      </body>
    </html>
  );
}
