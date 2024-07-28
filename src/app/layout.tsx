import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Fest",
  description: "Budget Management sytem for technical Fests",
  // icons: {
  //   icon: "",
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorText: "#111",
          colorPrimary: "#000",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn("dark:bg-black", inter.className)}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
