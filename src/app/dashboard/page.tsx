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
    <div className="flex">
      <SideBar />
      <div className="w-full">{selectedComponent}</div>
    </div>
  );
}
