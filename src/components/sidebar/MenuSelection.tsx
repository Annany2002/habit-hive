import { useGlobalContextProvider } from "@/app/context-api";
import { menuItemType } from "@/app/types/MenuItemTypes";

export default function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;

  return (
    <div className="mt-[70px] flex flex-col gap-6 items-center">
      {menuItems.map((menuItem: menuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;

  const handleSetMenu = () => {
    const MenuItem = menuItems.map((menuItem) => {
      if (menuItemProp.name === menuItem.name) {
        return { ...menuItem, isSelected: true };
      }
      return { ...menuItem, isSelected: false };
    });
    setMenuItems(MenuItem);
  };

  return (
    <div
      onClick={handleSetMenu}
      className={`flex font-semibold items-center justify-start gap-2 p-2 cursor-pointer rounded-md w-36 ${
        menuItemProp.isSelected
          ? "bg-[#47cf76]"
          : "hover:text-[#47cf76] font-bold"
      }`}
    >
      <menuItemProp.icon size={22} />
      <div>{menuItemProp.name}</div>
    </div>
  );
}
