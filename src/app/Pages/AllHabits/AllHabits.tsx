import HabitsCompleted from "./sections/left/bottom/HabitsCompleted";
import HabitsContainer from "./sections/left/middle/HabitsContainer";
import RightSideBar from "./sections/right/RightSideBar";
import TopBar from "./sections/left/top/TopBar";

export default function AllHabits() {
  return (
    <div className="flex w-full p-2 ">
      <div className="w-[80%] px-2 border-x-2">
        <TopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>
      <RightSideBar />
    </div>
  );
}
