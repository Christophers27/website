import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { SectionContextProvider } from "@/context/sectionContext";
import Header from "@/components/header";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christopher Setiabudi | Developer",
  description:
    "Personal website of Christopher Setiabudi, showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>
        <SectionContextProvider>
          <Header />
          {children}
        </SectionContextProvider>
      </body>
    </html>
  );
}
