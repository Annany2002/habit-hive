"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage: React.FC = () => {
  return (
    <div className="flex bg-[#fffafa] flex-col justify-center items-center gap-10 w-full h-screen">
      <SignIn />
    </div>
  );
};
export default SignInPage;
