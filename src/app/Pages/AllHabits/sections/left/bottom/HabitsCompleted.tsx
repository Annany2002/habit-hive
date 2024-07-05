import { Checkbox } from "@/components/ui/checkbox";
import { Bookmark, DotsThreeCircle } from "@phosphor-icons/react";
import React from "react";

export default function HabitsCompleted() {
  return (
    <div className="bg-white mt-3 p-4 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50 flex flex-col gap-2">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

function HabitCard() {
  return (
    <div className="flex gap-2 p-2 items-center justify-between border">
      <Checkbox checked={true} />

      <div className="flex justify-between w-full gap-2 rounded-md p-2 py-3 bg-slate-50">
        <div className="w-full">
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <Bookmark size={22} color="#47cf76" />
              <span>Coding</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="bg-green-300/40 px-1">
              <span className="text-[#47cf76]">Area1</span>
            </div>
            <div className="bg-green-300/40 px-1">
              <span className="text-[#47cf76]">Area2</span>
            </div>
            <div className="bg-green-300/40 px-1">
              <span className="text-[#47cf76]">Area3</span>
            </div>
          </div>
        </div>
        <div className="w-10 flex justify-center items-center">
          <DotsThreeCircle size={24} />
        </div>
      </div>
    </div>
  );
}
