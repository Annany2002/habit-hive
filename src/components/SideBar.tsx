import LogoAndName from "./LogoAndName";
import MenuSelection from "./MenuSelection";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-20 h-screen p-10 border-r-2">
      <LogoAndName />
      <MenuSelection />
    </div>
  );
}
