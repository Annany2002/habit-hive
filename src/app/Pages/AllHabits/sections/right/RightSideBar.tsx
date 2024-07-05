import UserProfile from "../../UserProfile";
import CalendarElement from "./CalendarElement";
import MainStatistics from "./MainStatistics";

export default function RightSideBar() {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white">
      <UserProfile />
      <MainStatistics />
      <CalendarElement />
    </div>
  );
}
