import { SignOutButton } from "@clerk/nextjs";
import { SignOut } from "@phosphor-icons/react";

export default function LogoutSection() {
  return (
    <div className="flex gap-2 items-center justify-center font-medium transition-all p-2 hover:text-[#47cf76]">
      <SignOut size={18} />
      <SignOutButton />
    </div>
  );
}
