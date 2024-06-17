import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemTypes";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
};
