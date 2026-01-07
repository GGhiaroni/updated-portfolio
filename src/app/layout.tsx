import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Tiziano | Fullstack Developer",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-accent antialiased",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
