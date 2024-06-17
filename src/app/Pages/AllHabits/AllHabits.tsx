import RightSideBar from "./components/RightSideBar";
import TopBar from "./components/TopBar";

export default function AllHabits() {
  return (
    <div className="flex w-full">
      <div className="w-[80%] m-5">
        <TopBar />
      </div>
      <RightSideBar />
    </div>
  );
}
