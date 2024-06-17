export default function HeroSection() {
  return (
    <div className="flex flex-col items-center mx-16 gap-6 mt-[100px]">
      <span className="font-bold text-3xl text-center">
        “Buzz into Better
        <span className="text-[#47cf76]"> Habits </span>!”
      </span>
      <p className="text-center text-md tracking-wide w-[370px] sm:w-[430px]">
        Welcome to{" "}
        <span className="text-[#47cf76] font-semibold"> HabitHive </span>,
        unleash the power of routine with our intuitive interface, designed to
        help you build a healthier, more productive life.
      </p>
      <button className="text-[#f1f3f4] font-bold bg-[#47cf76] border-[1.5px] border-green-700 px-8 py-4 rounded-full focus:outline-none">
        Let&apos;s get started
      </button>
    </div>
  );
}
