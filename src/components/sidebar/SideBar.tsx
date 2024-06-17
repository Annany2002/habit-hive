import LogoAndName from "./LogoAndName";
import LogoutSection from "./LogoutSection";
import MenuSelection from "./MenuSelection";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-20 h-screen bg-[#f3f2f2] p-10 border-r-2">
      <LogoAndName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}
