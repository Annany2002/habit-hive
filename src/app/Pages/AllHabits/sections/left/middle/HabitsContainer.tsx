import { useGlobalContextProvider } from "@/app/context-api";
import HabitsMiddleContainer from "./HabitsMiddleContainer";
import HabitsTopContainer from "./HabitsTopContainer";
import { color } from "@/color";

export default function HabitsContainer() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myBlack : "",
        color: isDarkMode ? "white" : "",
      }}
      className="bg-white mt-4 p-5 flex flex-col gap-3 rounded-md transition-all"
    >
      <HabitsTopContainer />
      <HabitsMiddleContainer />
    </div>
  );
}
