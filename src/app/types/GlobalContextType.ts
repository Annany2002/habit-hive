<<<<<<< HEAD
import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemTypes";
import { DarkModeItem } from "./DarkModeTypes";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  };
  darkModeObject: {
    isDarkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    darkModeItems: DarkModeItem[];
    setDarkModeItems: Dispatch<SetStateAction<DarkModeItem[]>>;
  };
  habitWindowObject: {
    openHabitWindow: boolean;
    setOpenHabitWindow: Dispatch<SetStateAction<boolean>>;
  };
  timePickerObject: {
    openTimePickerWindow: boolean;
    setOpenTimePickerWindow: Dispatch<SetStateAction<boolean>>;
  };
};
=======
import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemTypes";
import { DarkModeItem } from "./DarkModeTypes";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  };
  darkModeObject: {
    isDarkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    darkModeItems: DarkModeItem[];
    setDarkModeItems: Dispatch<SetStateAction<DarkModeItem[]>>;
  };
  habitWindowObject: {
    openHabitWindow: boolean;
    setOpenHabitWindow: Dispatch<SetStateAction<boolean>>;
  };
  timePickerObject: {
    openTimePickerWindow: boolean;
    setOpenTimePickerWindow: Dispatch<SetStateAction<boolean>>;
  };
};
>>>>>>> 627c8b0812ab5f349005c2619bec64ee5b05305f
