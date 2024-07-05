"use client";

import { GlobalContextType } from "./types/GlobalContextType";
import { ReactNode, useState, createContext, useContext } from "react";
import { menuItemType } from "./types/MenuItemTypes";
import {
  ChartBar,
  HardDrives,
  Moon,
  Notepad,
  Sun,
} from "@phosphor-icons/react";
import { DarkModeItem } from "./types/DarkModeTypes";

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  darkModeObject: {
    isDarkMode: false,
    setDarkMode: () => {},
    darkModeItems: [],
    setDarkModeItems: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All habits", isSelected: true, icon: Notepad },
    { name: "Statistics", isSelected: false, icon: ChartBar },
    { name: "Areas", isSelected: false, icon: HardDrives },
  ]);

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItem[]>([
    { id: 1, icon: Sun, isSelected: true },
    { id: 2, icon: Moon, isSelected: false },
  ]);

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        darkModeObject: {
          isDarkMode,
          darkModeItems,
          setDarkMode,
          setDarkModeItems,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
