"use client";

import IconLogo from "@/SVG/IconLogo";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <header className="bg-[#fffafa] p-[6px]">
      {/* Main div */}
      <div className="items-center justify-center sm:flex sm:justify-between">
        {/* Logo and Name */}

        <div className="flex justify-center items-center gap-2 p-2 sm:justify-evenly">
          <IconLogo />
          <span className="font-medium text-[26px]">
            <span className="font-extrabold text-[#47cf76]">Habit</span>Hive
          </span>
        </div>

        {/* Signup and SignIn */}

        {userId ? (
          <Link href={"/dashboard"}>
            <button className="bg-[#47cf76] border-[1.5px] border-green-700 px-5 py-2 rounded-full">
              Dashboard
            </button>
          </Link>
        ) : (
          <div className="text-[18px] justify-center font-bold flex gap-4 p-2 sm:justify-evenly">
            <Link href={"/sign-in"}>
              <button className="bg-[#47cf76] border-[1.5px] border-green-700 px-5 py-2 rounded-full">
                Sign In
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="bg-[#47cf76] border-[1.5px] border-green-700 px-5 py-2 rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
