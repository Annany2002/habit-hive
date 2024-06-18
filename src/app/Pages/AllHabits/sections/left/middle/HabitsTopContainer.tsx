import { ArrowCircleLeft, ArrowCircleRight, Plus } from "@phosphor-icons/react";
import React from "react";

export default function HabitsTopContainer() {
  return (
    <div className="flex p-3 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <h2 className="font-bold text-lg">Tuesday</h2>
          <span className="font-light text-[12px]">18 Jun 2024</span>
        </div>
        {/*  */}
        <div className="flex gap-1 ml-4">
          <div className="cursor-pointer text-[#47cf76]">
            <ArrowCircleLeft size={22} weight="bold" />
          </div>
          <div className="cursor-pointer text-[#47cf76]">
            <ArrowCircleRight size={22} weight="bold" />
          </div>
        </div>
      </div>
      <button className="flex gap-2 p-3 font-medium items-center rounded-md text-sm bg-[#47cf76]">
        <Plus weight="bold" />
        <span>New Habit</span>
      </button>
    </div>
  );
}
