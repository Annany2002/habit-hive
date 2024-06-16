import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monte = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300"] });

export const metadata: Metadata = {
  title: "HabitHive",
  description:
    "A place where all your habits come together, much like bees in a hive working towards a common goal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monte.className}>{children}</body>
    </html>
  );
}
