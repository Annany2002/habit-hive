import HabitsCompleted from "./sections/left/bottom/HabitsCompleted";
import HabitsContainer from "./sections/left/middle/HabitsContainer";
import RightSideBar from "./sections/right/RightSideBar";
import TopBar from "./sections/left/top/TopBar";

export default function AllHabits() {
  return (
    <div className="flex flex-row gap-0 w-full p-2 max-lg:flex-col">
      <div className="w-full px-2 border-x-2">
        <TopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>
      <RightSideBar />
    </div>
  );
}
