import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-6 max-lg:hidden">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "w-12 h-12",
          },
        }}
      />
      <div>
        <p className="text-lg font-medium">
          <span className="text-[#47cf76]">{user?.firstName}</span>{" "}
          {user?.lastName}
        </p>
      </div>
    </div>
  );
}
