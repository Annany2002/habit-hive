"use client";

import { SignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-[#fffafa] flex flex-col justify-center items-center gap-10 w-full h-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
