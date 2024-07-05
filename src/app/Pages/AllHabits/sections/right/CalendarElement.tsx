"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarElement() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-4 bg-slate-50 rounded-xl p-5">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
