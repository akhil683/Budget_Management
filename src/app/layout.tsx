import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commodity Forecast",
  description: "AI/ML based Price predictor for Agri-Horticultural commodities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("dark:bg-black", inter.className)}>
        <ThemeProvider>
          <Navbar />
          <section className="mt-[60px]">{children}</section>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
