import { useUser } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

export default function TopBar() {
  const { user } = useUser();
  return (
    <div className="flex justify-between rounded-md p-5">
      <div className="flex flex-col p-2">
        <span className="text-xl">
          <span className="font-bold">Welcome Back, </span>
          <span className="font-light] ">{user?.firstName}...</span>
        </span>
        <span className="text-[14px] tracking-wide text-gray-400">
          Howdy !!!
        </span>
      </div>
      <div className="w-[50%] flex gap-3 justify-between">
        <SearchBar />
        <DarkMode />
      </div>
    </div>
  );
}
