import { useGlobalContextProvider } from "@/app/context-api";
import LogoAndName from "./LogoAndName";
import LogoutSection from "./LogoutSection";
import MenuSelection from "./MenuSelection";
import { useEffect, useRef } from "react";
import { color } from "@/color";

export default function SideBar() {
  const { openSideBarObject, darkModeObject } = useGlobalContextProvider();

  const { openSideBar, setOpenSideBar } = openSideBarObject;
  const { isDarkMode } = darkModeObject;

  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!sideBarRef.current?.contains(event.target as Node)) {
        setOpenSideBar(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openSideBar]);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myBlack : "white",
        color: isDarkMode ? "white" : "",
      }}
      ref={sideBarRef}
      className={`${
        !openSideBar ? "max-xl:hidden" : "fixed shadow-lg"
      } z-50 p-10 flex flex-col gap-12 min-h-screen transition duration-600`}
    >
      <LogoAndName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}
