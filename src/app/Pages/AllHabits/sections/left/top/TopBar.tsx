import { useUser } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { List } from "@phosphor-icons/react";
import { useGlobalContextProvider } from "@/app/context-api";
import { useEffect } from "react";

export default function TopBar() {
  const { user } = useUser();

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
    <div className="lg:flex gap-2 justify-between items-center rounded-md mt-5 p-5 bg-white dark:bg-slate-700">
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
