import { Dispatch, SetStateAction, useState } from "react";
import { IconsData } from "./IconData";
import { useGlobalContextProvider } from "@/app/context-api";
import { Icon, X } from "@phosphor-icons/react";

export default function IconWindow({
  openIconWindow,
  setOpenIconWindow,
  SelectedIcon,
  setSelectedIcon,
}: {
  openIconWindow: boolean;
  setOpenIconWindow: Dispatch<SetStateAction<boolean>>;
  SelectedIcon: Icon;
  setSelectedIcon: Dispatch<SetStateAction<Icon>>;
}) {
  const [allIcons, setAllIcons] = useState(IconsData);
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#1b1b1b" : "white",
        color: isDarkMode ? "#f5f5f5" : "black",
      }}
      className={`z-50 w-[80%] left-1/2 transform -translate-x-1/2 p-4 rounded-md border flex flex-col gap-6 shadow-md
        ${openIconWindow ? "absolute" : "hidden"}`}
    >
      <X
        height={20}
        width={20}
        fill="black"
        className="absolute top-8 right-4 text-gray-300 cursor-pointer"
        onClick={() => setOpenIconWindow(false)}
      />
      <span className="font-bold text-lg  bg-transparent mt-3">
        Choose your Icon
      </span>
      <div className="border border-gray-300 p-5 flex flex-wrap gap-4 items-center rounded-md mb-5">
        {allIcons.map(({ Icon, isSelected }, _) => (
          <div
            key={_}
            className={`border border-gray-300 rounded-md text-xl cursor-pointer p-2 hover:border-[#47cf76] hover:text-[#47cf76] ${
              isSelected ? "text-[#47cf76] border-[#47cf76]" : ""
            }`}
            onClick={() => {
              setSelectedIcon(Icon);
              setOpenIconWindow(false);
            }}
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
}
