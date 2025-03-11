import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { Checkbox } from "@/components/ui/checkbox";
import { Bookmark, DotsThreeCircle } from "@phosphor-icons/react";
import React from "react";

export default function HabitsMiddleContainer() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myGrey : color.myWhite,
      }}
      className="flex gap-2 p-2 items-center rounded-md justify-between"
    >
      <Checkbox
        className="rounded-full"
        style={{ backgroundColor: isDarkMode ? color.myBlack : "" }}
      />

      <div className="flex justify-between w-full gap-2 rounded-md p-2 py-3">
        <div className="w-full">
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <Bookmark size={22} color="#47cf76" />
              <span>Coding</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="bg-green-300/40 px-1">
              <span
                className={`${isDarkMode ? "text-white" : "text-[#47cf76]"}`}
              >
                Area1
              </span>
            </div>
            <div className="bg-green-300/40 px-1">
              <span
                className={`${isDarkMode ? "text-white" : "text-[#47cf76]"}`}
              >
                Area2
              </span>
            </div>
            <div className="bg-green-300/40 px-1">
              <span
                className={`${isDarkMode ? "text-white" : "text-[#47cf76]"}`}
              >
                Area3
              </span>
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
