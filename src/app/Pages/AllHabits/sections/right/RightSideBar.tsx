import { useGlobalContextProvider } from "@/app/context-api";
import UserProfile from "./UserProfile";
import CalendarElement from "./CalendarElement";
import MainStatistics from "./MainStatistics";
import { color } from "@/color";

export default function RightSideBar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  return (
    <div
      style={{
        color: isDarkMode ? "white" : "",
        backgroundColor: isDarkMode ? color.myBlack : "",
      }}
      className="mt-4 lg:mt-0 mx-2 flex flex-col sm:flex md:flex-row lg:flex-col rounded-md gap-2 sm:justify-center md:justify-evenly lg:justify-center items-center bg-white"
    >
      <UserProfile />
      <MainStatistics />
      <CalendarElement />
    </div>
  );
}
