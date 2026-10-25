import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteNav from "@/components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "omkar",
  description: "a sleek-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Removed the <> fragment, html must be the root.
    // 2. Added suppressHydrationWarning (required by next-themes).
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* 3. Fixed the typo: forcedTheme instead of forceTheme */}
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <SiteNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
