"use client";

import HeroSection from "@/components/main-page/HeroSection";
import Navbar from "@/components/main-page/Navbar";
import { useGlobalContextProvider } from "./context-api";
import { color } from "@/color";

export default function Home() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  return (
    <div
      style={{
        color: isDarkMode ? "white" : "",
        backgroundColor: isDarkMode ? color.myBlack : "",
      }}
      className="bg-[#F8F8FF] min-h-screen"
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}
