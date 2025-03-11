import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchBar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  return (
    <div>
      <div
        style={{
          backgroundColor: isDarkMode ? color.myGrey : "white",
          color: isDarkMode ? "white" : "black",
        }}
        className="flex gap-3 items-center justify-end p-3 rounded-3xl"
      >
        <MagnifyingGlass color={isDarkMode ? "white" : "gray"} size={20} />
        <input
          className={`w-full text-[14px] outline-none font-light bg-transparent px-2 ${
            isDarkMode ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
