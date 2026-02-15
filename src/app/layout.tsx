import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hernán Mercado | Frontend Developer",
  description:
    "Frontend Developer with 6+ years of experience building high-quality web applications. Specializing in React, Next.js, and modern frontend technologies.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Hernán Mercado",
  ],
  authors: [{ name: "Hernán Mercado" }],
  openGraph: {
    title: "Hernán Mercado | Frontend Developer",
    description:
      "Frontend Developer with 6+ years of experience building high-quality web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
