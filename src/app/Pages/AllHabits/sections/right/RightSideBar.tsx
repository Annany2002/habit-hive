import { useGlobalContextProvider } from "@/app/context-api";
import UserProfile from "../../UserProfile";
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
      className="mt-4 lg:mt-0 mx-2 flex flex-col rounded-md gap-2 justify-center items-center bg-white"
    >
      <UserProfile />
      <MainStatistics />
      <CalendarElement />
    </div>
  );
}
