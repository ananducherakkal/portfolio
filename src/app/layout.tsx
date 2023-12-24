import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/shadcn";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anandu Cherakkal",
  description: "Portfolio site for Anandu Cherakkal - Full stack developer",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayout) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "w-full h-full text-base m-0 bg-background text-text relative"
        )}
      >
        {children}
      </body>
    </html>
  );
}
