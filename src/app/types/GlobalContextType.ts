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
};
