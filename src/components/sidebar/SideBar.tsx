import LogoAndName from "./LogoAndName";
import LogoutSection from "./LogoutSection";
import MenuSelection from "./MenuSelection";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-20 h-screen p-10 px-8">
      <LogoAndName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}
