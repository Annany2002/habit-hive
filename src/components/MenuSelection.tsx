import { useGlobalContextProvider } from "@/app/context-api";
import { menuItemType } from "@/app/types/MenuItemTypes";
import React from "react";

export default function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="mt-[70px] flex flex-col gap-3 items-center">
      {menuItems.map((menuItem: menuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  return (
    <div
      className={`flex font-medium items-center gap-2 p-2 mb-3 cursor-pointer rounded-md w-36 ${
        menuItemProp.isSelected ? "bg-[#47cf76]" : ""
      }`}
    >
      <menuItemProp.icon size={22} />
      <div>{menuItemProp.name}</div>
    </div>
  );
}
