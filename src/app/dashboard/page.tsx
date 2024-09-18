"use client";

import SideBar from "@/components/sidebar/SideBar";
import { useGlobalContextProvider } from "../context-api";
import { useEffect, useState } from "react";
import { menuItemType } from "../types/MenuItemTypes";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import Areas from "../Pages/Areas/Areas";
import { color } from "@/color";

export default function Dashboard() {
  const { menuItemsObject, darkModeObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const { isDarkMode } = darkModeObject;

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
    <div
      style={{
        backgroundColor: isDarkMode ? color.myGrey : color.myWhite,
      }}
      className="flex"
    >
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
