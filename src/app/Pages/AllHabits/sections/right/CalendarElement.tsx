"use client";

import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarElement() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myBlack : "",
      }}
      className="flex flex-col p-2 mx-1 justify-center items-center mt-4 bg-slate-50 rounded-xl"
    >
      <Calendar
        style={{
          color: isDarkMode ? "white" : "",
          backgroundColor: isDarkMode ? color.myGrey : "",
          textDecorationColor: "white",
        }}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
