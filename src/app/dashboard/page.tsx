"use client";

import SideBar from "@/components/sidebar/SideBar";
import { useGlobalContextProvider } from "../context-api";
import { useEffect, useState } from "react";
import { menuItemType } from "../types/MenuItemTypes";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import Areas from "../Pages/Areas/Areas";

export default function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>(null);

  let selectedComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case "All habits":
      selectedComponent = <AllHabits />;
      break;
    case "Statistics":
      selectedComponent = <Statistics />;
      break;
    case "Areas":
      selectedComponent = <Areas />;
      break;
  }

  return (
    <div className="flex bg-[#F8F8FF] dark:bg-slate-500">
      <SideBar />
      <div className="w-full">{selectedComponent}</div>
      <OpaqueLayer />
    </div>
  );
}

function OpaqueLayer() {
  const { openSideBarObject } = useGlobalContextProvider();
  const { openSideBar } = openSideBarObject;

  return (
    <div
      className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
        openSideBar ? "fixed" : "hidden"
      }`}
    />
  );
}
