"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import LogoAndName from "./LogoAndName";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <header className="bg-[#fffafa] p-[6px]">
      {/* Main div */}
      <div className="items-center justify-center sm:flex sm:justify-between">
        {/* Logo and Name */}

        <LogoAndName />

        {/* Signup and SignIn */}

        {userId ? (
          <Link href={"/dashboard"}>
            <button className="btn-green">Dashboard</button>
          </Link>
        ) : (
          <div className="text-[18px] justify-center font-bold flex gap-4 p-2 sm:justify-evenly">
            <Link href={"/sign-in"}>
              <button className="btn-green">Sign In</button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="btn-green">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
