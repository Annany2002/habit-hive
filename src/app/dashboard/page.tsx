"use client";

import SideBar from "@/components/SideBar";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex">
      <SideBar />
      <div>This is a page</div>
    </div>
  );
}
