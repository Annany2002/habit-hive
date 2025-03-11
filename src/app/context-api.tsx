<<<<<<< HEAD
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
  habitWindowObject: {
    openHabitWindow: false,
    setOpenHabitWindow: () => {},
  },
  timePickerObject: {
    openTimePickerWindow: false,
    setOpenTimePickerWindow: () => {},
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
  const [openHabitWindow, setOpenHabitWindow] = useState<boolean>(false);
  const [openTimePickerWindow, setOpenTimePickerWindow] =
    useState<boolean>(false);

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
        habitWindowObject: {
          openHabitWindow,
          setOpenHabitWindow,
        },
        timePickerObject: {
          openTimePickerWindow,
          setOpenTimePickerWindow,
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
=======
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
  habitWindowObject: {
    openHabitWindow: false,
    setOpenHabitWindow: () => {},
  },
  timePickerObject: {
    openTimePickerWindow: false,
    setOpenTimePickerWindow: () => {},
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
  const [openHabitWindow, setOpenHabitWindow] = useState<boolean>(false);
  const [openTimePickerWindow, setOpenTimePickerWindow] =
    useState<boolean>(false);

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
        habitWindowObject: {
          openHabitWindow,
          setOpenHabitWindow,
        },
        timePickerObject: {
          openTimePickerWindow,
          setOpenTimePickerWindow,
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
>>>>>>> 627c8b0812ab5f349005c2619bec64ee5b05305f
