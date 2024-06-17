import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalContextProvider from "./context-api";

const monte = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Habit-Hive",
  description:
    "A place where all your habits come together, much like bees in a hive working towards a common goal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <GlobalContextProvider>
        <html lang="en">
          <body className={monte.className}>{children}</body>
        </html>
      </GlobalContextProvider>
    </ClerkProvider>
  );
}
