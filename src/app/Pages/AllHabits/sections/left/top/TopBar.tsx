import { useUser } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { List } from "@phosphor-icons/react";
import { useGlobalContextProvider } from "@/app/context-api";
import { useEffect } from "react";
import { is } from "date-fns/locale";
import { color } from "@/color";

export default function TopBar() {
  const { user } = useUser();
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  const { openSideBarObject } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = openSideBarObject;

  function openSideBarFunction() {
    setOpenSideBar(!openSideBar);
  }

  useEffect(() => {
    function handleResize() {
      setOpenSideBar(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? color.myBlack : "white",
      }}
      className="lg:flex gap-2 justify-between items-center rounded-md py-3 px-5 bg-white transition-all"
    >
      <div className="flex-col flex p-2">
        <span className="text-xl">
          <span className="font-bold">Welcome Back, </span>
          <span className="font-light] ">{user?.firstName}...</span>
        </span>
        <span className="text-[14px] tracking-wide text-gray-300">
          Howdy !!!
        </span>
      </div>
      <div className="lg:w-[50%] flex gap-3 justify-between">
        <SearchBar />
        <DarkMode />
        <List
          onClick={openSideBarFunction}
          size={22}
          weight="bold"
          className="m-[6px] max-xl:flex hidden mt-[13px] cursor-pointer"
        />
      </div>
    </div>
  );
}
