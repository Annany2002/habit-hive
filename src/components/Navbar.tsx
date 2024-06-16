"use client";

import IconLogo from "@/SVG/IconLogo";

export default function Navbar() {
  return (
    <header className="bg-[#fffafa] p-4">
      {/* Main div */}
      <div className="items-center justify-center sm:flex sm:justify-between">
        {/* Logo and Name */}
        <div className="flex justify-center items-center gap-2 h-auto p-2 sm:justify-evenly">
          <IconLogo />
          <span className="font-medium text-[26px]">
            <span className="font-extrabold text-[#47cf76]">Habit</span> Hive
          </span>
        </div>
        {/* Signup and SignIn */}
        <div className="text-[18px] justify-center font-bold flex gap-4 p-2 sm:justify-evenly">
          <button className="bg-[#47cf76] border-[1.5px] border-green-700 px-5 py-2 rounded-full">
            Sign Up
          </button>
          <button className="bg-[#47cf76] border-[1.5px] border-green-700 px-5 py-2 rounded-full">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
