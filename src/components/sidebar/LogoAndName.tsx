import IconLogo from "@/SVG/IconLogo";

export default function LogoAndName() {
  return (
    <div className="flex justify-center items-center gap-2 p-2 sm:justify-evenly">
      <IconLogo />
      <span className="font-medium text-[26px]">
        <span className="font-extrabold text-[#47cf76]">Habit</span>Hive
      </span>
    </div>
  );
}
