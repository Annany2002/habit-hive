"use client";

import { GlobalContextType } from "./types/GlobalContextType";
import { ReactNode, useState, createContext, useContext } from "react";
import { menuItemType } from "./types/MenuItemTypes";
import { ChartBar, HardDrives, Notepad } from "@phosphor-icons/react";

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All habits", isSelected: true, icon: Notepad },
    { name: "Statistics", isSelected: true, icon: ChartBar },
    { name: "Areas", isSelected: false, icon: HardDrives },
  ]);

  return (
    <GlobalContext.Provider
      value={{ menuItemsObject: { menuItems, setMenuItems } }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
