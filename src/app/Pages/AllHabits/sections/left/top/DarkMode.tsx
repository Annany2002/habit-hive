import { Sun, Moon } from "@phosphor-icons/react";
import React from "react";

export default function DarkMode() {
  return (
    <div className="flex bg-slate-50 w-[90px] relative rounded-3xl">
      <div className="h-full w-[45px] z-40 flex justify-center items-center">
        <Sun size={20} weight="bold" />
      </div>
      <div className="h-full w-[45px] flex justify-center items-center z-40 opacity-100">
        <Moon size={20} />
        {/* <div className="bg-white w-[38px] absolute h-[38px] top-1 left-[4px] rounded-full"></div> */}
      </div>
    </div>
  );
}
