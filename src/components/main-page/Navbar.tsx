"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import LogoAndName from "../sidebar/LogoAndName";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <header className="p-[6px]">
      <div className="items-center justify-center sm:flex sm:justify-between">
        <LogoAndName />

        <div className="text-[18px] justify-center font-bold flex gap-4 p-2 sm:justify-evenly">
          {userId ? (
            <Link href={"/dashboard"}>
              <button className="btn-green">Dashboard</button>
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <button className="btn-green">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
