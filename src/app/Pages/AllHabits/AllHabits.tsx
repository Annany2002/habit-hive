import HabitsCompleted from "./sections/left/bottom/HabitsCompleted";
import HabitsContainer from "./sections/left/middle/HabitsContainer";
import RightSideBar from "./sections/right/RightSideBar";
import TopBar from "./sections/left/top/TopBar";
import HabitWindow from "./sections/left/top/HabitWindow";
import { useGlobalContextProvider } from "@/app/context-api";

export default function AllHabits() {
  return (
    <div className="flex flex-row justify-center w-full p-2 max-lg:flex-col relative">
      <HabitWindow />
      <OpaqueLayer />
      <div className="w-full flex-col flex-grow px-2">
        <TopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>
      <RightSideBar />
    </div>
  );
}

function OpaqueLayer() {
  const { habitWindowObject } = useGlobalContextProvider();
  const { openHabitWindow } = habitWindowObject;

  return (
    <div
      className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
        openHabitWindow ? "fixed" : "hidden"
      }`}
    />
  );
}
