"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div>
      Hello, {user?.fullName}
      <SignOutButton>Signout</SignOutButton>
    </div>
  );
}
