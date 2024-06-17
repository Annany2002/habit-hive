import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchBar() {
  return (
    <div>
      <div className="flex gap-3 items-center justify-end p-3 rounded-3xl">
        <MagnifyingGlass color="gray" size={20} />
        <input
          className={`w-full text-[14px] outline-none font-light bg-slate-50 focus:border-[1px] px-2`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
