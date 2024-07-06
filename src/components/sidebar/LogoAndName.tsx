import IconLogo from "@/SVG/IconLogo";
import Link from "next/link";

export default function LogoAndName() {
  return (
    <Link href={"/"}>
      <div className="flex justify-center items-center gap-2 p-2 cursor-pointer sm:justify-evenly">
        <IconLogo />
        <span className="font-medium text-[26px]">
          <span className="font-extrabold text-[#47cf76]">Habit</span>Hive
        </span>
      </div>
    </Link>
  );
}
