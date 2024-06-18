import HabitsMiddleContainer from "./HabitsMiddleContainer";
import HabitsTopContainer from "./HabitsTopContainer";

export default function HabitsContainer() {
  return (
    <div className="bg-white mt-4 p-5 flex flex-col gap-3 rounded-md">
      <HabitsTopContainer />
      <HabitsMiddleContainer />
    </div>
  );
}
