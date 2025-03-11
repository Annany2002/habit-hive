import { useGlobalContextProvider } from "@/app/context-api";
import { X, Icon, CaretDown, ArrowDown } from "@phosphor-icons/react";
import {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { color } from "@/color";
import IconWindow from "../../../IconsWindow/IconWindow";
import { Minus, Plus } from "lucide-react";
import TimePicker from "./TimePicker";

type FrequencyType = {
  type: string;
  days: string[];
  number: number;
};

type HabitType = {
  _id: string;
  name: string;
  icon: Icon;
  frequency: FrequencyType[];
  notificationTime: string;
};

type RepeatOption = {
  name: string;
  isSelected: boolean;
};

type DayOption = {
  id: number;
  name: string;
  isSelected: boolean;
};

const HeaderMemo = memo(Header);
const InputNameAndButtonMemo = memo(InputNameAndButton);

export default function HabitWindow() {
  const { habitWindowObject, darkModeObject } = useGlobalContextProvider();
  const { openHabitWindow } = habitWindowObject;
  const { isDarkMode } = darkModeObject;

  const [habitItem, setHabitItem] = useState<HabitType>({
    _id: "",
    name: "",
    icon: CaretDown,
    frequency: [{ type: "Daily", days: ["M"], number: 1 }],
    notificationTime: "",
  });

  const [openIconWindow, setOpenIconWindow] = useState<boolean>(false);
  const [SelectedIcon, setSelectedIcon] = useState<Icon>(habitItem.icon);

  const updateHabitName = (inputText: string) => {
    const copyHabitItem = { ...habitItem };
    copyHabitItem.name = inputText;
    setHabitItem(copyHabitItem);
  };

  function changeRepeatOption(repeatOptions: RepeatOption[]) {
    const filterIsSelected = repeatOptions.filter(
      (singleOption) => singleOption.isSelected
    );
    const nameOfSelectedOption = filterIsSelected[0].name;
    const copyHabitItem = { ...habitItem };

    copyHabitItem.frequency[0].type = nameOfSelectedOption;
    setHabitItem(copyHabitItem);
  }

  function changeDaysOption(allDays: DayOption[]) {
    const selectedDays = allDays
      .filter((singleDay) => singleDay.isSelected)
      .map((day) => day.name);

    const copyHabitItem = { ...habitItem };

    copyHabitItem.frequency[0].days = selectedDays;
    setHabitItem(copyHabitItem);
  }

  function changeWeeksOption(weeks: number) {
    const copyHabitItem = { ...habitItem };
    copyHabitItem.frequency[0].number = weeks;
    setHabitItem(copyHabitItem);
  }

  function updateReminderTime(timeVal: string) {
    const copyHabitItem = { ...habitItem };
    copyHabitItem.notificationTime = timeVal;
    setHabitItem(copyHabitItem);
  }

  useEffect(() => {
    const copyHabitItem = { ...habitItem };
    copyHabitItem.icon = SelectedIcon;
    setHabitItem(copyHabitItem);
  }, [SelectedIcon]);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myBlack : "white",
        color: isDarkMode ? "white" : "",
      }}
      className={`top-[1%] left-1/2 transform -translate-x-1/2 w-[66%] z-50 p-8 rounded-md shadow-md transition-all ${
        openHabitWindow ? "absolute" : "hidden"
      }`}
    >
      <IconWindow
        openIconWindow={openIconWindow}
        setOpenIconWindow={setOpenIconWindow}
        SelectedIcon={SelectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
      <HeaderMemo />
      <InputNameAndButtonMemo
        setOpenIconWindow={setOpenIconWindow}
        onUpdateHabitName={updateHabitName}
        habitName={habitItem.name}
        SelectedIcon={SelectedIcon}
      />
      <Repeat
        onChangeOption={changeRepeatOption}
        onChangeDaysOption={changeDaysOption}
        onChangeWeeksOption={changeWeeksOption}
      />
      <Reminder />
      <TimePicker onSaveTime={updateReminderTime} />
      <SaveButton habit={habitItem} />
    </div>
  );
}

function Header() {
  const { habitWindowObject } = useGlobalContextProvider();
  const { setOpenHabitWindow } = habitWindowObject;

  return (
    <div className="flex justify-between items-center">
      <span className="font-bold text-xl">Add a new Habit</span>
      <X
        size={26}
        className="cursor-pointer"
        onClick={() => setOpenHabitWindow(false)}
      />
    </div>
  );
}

function InputNameAndButton({
  onUpdateHabitName,
  habitName,
  setOpenIconWindow,
  SelectedIcon,
}: {
  onUpdateHabitName: (inputText: string) => void;
  habitName: string;
  setOpenIconWindow: Dispatch<SetStateAction<boolean>>;
  SelectedIcon: Icon;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { habitWindowObject, darkModeObject } = useGlobalContextProvider();
  const { openHabitWindow } = habitWindowObject;
  const { isDarkMode } = darkModeObject;

  function updateInputHabit(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdateHabitName(event.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);

    if (!openHabitWindow) {
      onUpdateHabitName("");
    }
  }, [openHabitWindow]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [SelectedIcon]);

  return (
    <div className="flex flex-col gap-2 mt-8 px-3">
      <span className="opacity-80 text-[17px]">Habit Name</span>
      <div className="flex gap-4 items-center justify-between">
        <input
          style={{
            backgroundColor: isDarkMode ? color.myGrey : "white",
            color: isDarkMode ? "white" : "",
          }}
          ref={inputRef}
          value={habitName}
          onChange={(val) => updateInputHabit(val)}
          className={`border w-full outline-none p-4 rounded-md text-[13px] ${
            isDarkMode ? "placeholder:text-white" : ""
          }`}
          placeholder="Type your habit..."
        />
        <div className="bg-myGreen p-2 mt-[1px] rounded-md">
          {
            <SelectedIcon
              size={20}
              className="cursor-pointer"
              onClick={() => setOpenIconWindow(true)}
            />
          }
        </div>
      </div>
    </div>
  );
}

function Repeat({
  onChangeOption,
  onChangeDaysOption,
  onChangeWeeksOption,
}: {
  onChangeOption: (repeatOptions: RepeatOption[]) => void;
  onChangeDaysOption: (allDays: DayOption[]) => void;
  onChangeWeeksOption: (weeks: number) => void;
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  const [repeatOptions, setRepeatOptions] = useState<RepeatOption[]>([
    { name: "Daily", isSelected: true },
    { name: "Weekly", isSelected: false },
  ]);

  const days: DayOption[] = [
    { id: 1, name: "M", isSelected: true },
    { id: 2, name: "T", isSelected: false },
    { id: 3, name: "W", isSelected: false },
    { id: 4, name: "T", isSelected: false },
    { id: 5, name: "F", isSelected: false },
    { id: 6, name: "S", isSelected: false },
    { id: 7, name: "S", isSelected: false },
  ];

  const [allDays, setAllDays] = useState<DayOption[]>(days);
  const [weeks, setWeeks] = useState(6);
  const [selectedOption, setSelectedOption] = useState<string>("Daily");

  function changeOption(indexClicked: number) {
    const updateRepeatOptions = repeatOptions.map((singleOption, idx) => {
      if (idx === indexClicked) {
        return { ...singleOption, isSelected: true };
      }
      return { ...singleOption, isSelected: false };
    });
    setRepeatOptions(updateRepeatOptions);
    onChangeOption(updateRepeatOptions);
  }

  useEffect(() => {
    onChangeDaysOption(allDays);
  }, [allDays]);

  useEffect(() => {
    onChangeWeeksOption(weeks);
  }, [weeks]);

  useEffect(() => {
    const getNameOptionSelected = repeatOptions.filter(
      (option) => option.isSelected
    )[0].name;

    setSelectedOption(getNameOptionSelected);
  }, [repeatOptions]);

  return (
    <div className="flex flex-col gap-2 mt-6 px-3">
      <span className="text-[17px]">Repeat</span>
      <div className="flex gap-4 mt-2 items-center">
        {repeatOptions.map((singleOption, idx) => (
          <button
            key={idx}
            onClick={() => changeOption(idx)}
            style={{
              backgroundColor: isDarkMode
                ? singleOption.isSelected
                  ? color.myGreen
                  : "transparent"
                : singleOption.isSelected
                ? color.myWhite
                : "",
              color: singleOption.isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
            className="p-2 px-3 rounded-md cursor-pointer"
          >
            {singleOption.name}
          </button>
        ))}
      </div>
      {selectedOption === "Daily" ? (
        <DailyOptions allDays={allDays} setAllDays={setAllDays} />
      ) : (
        <WeeklyOption weeks={weeks} setWeeks={setWeeks} />
      )}
    </div>
  );
}

function DailyOptions({
  allDays,
  setAllDays,
}: {
  allDays: DayOption[];
  setAllDays: Dispatch<SetStateAction<DayOption[]>>;
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  function selectedDays(idx: number) {
    const selectedCount: number = allDays.filter(
      (singleDay) => singleDay.isSelected
    ).length;

    const updateAllDays = allDays.map((singleDay, index) => {
      if (selectedCount === 1 && singleDay.isSelected && index === idx) {
        return singleDay;
      }

      return index === idx
        ? { ...singleDay, isSelected: !singleDay.isSelected }
        : singleDay;
    });

    setAllDays(updateAllDays);
  }

  return (
    <div className="mt-5 flex flex-col gap-4">
      <span className="opacity-85">On These Days</span>
      <div className="w-full flex gap-3">
        {allDays.map((singleDay, index) => (
          <span
            key={index}
            className={`p-2 px-3 w-11 text-center rounded-md select-none cursor-pointer ${
              singleDay.isSelected ? "text-white" : "text-gray-400"
            }`}
            onClick={() => selectedDays(index)}
            style={{
              backgroundColor: isDarkMode
                ? singleDay.isSelected
                  ? color.myGreen
                  : "transparent"
                : singleDay.isSelected
                ? color.myWhite
                : "",
              color: singleDay.isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
          >
            {singleDay.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function WeeklyOption({
  weeks,
  setWeeks,
}: {
  weeks: number;
  setWeeks: Dispatch<SetStateAction<number>>;
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  const updateCounter = (option: string) => {
    if (option === "up") {
      setWeeks(weeks >= 7 ? 7 : weeks + 1);
    }
    if (option === "down") {
      setWeeks(weeks <= 1 ? 1 : weeks - 1);
    }
  };

  return (
    <div style={{ color: color.myGreen }} className="flex gap-12 mt-6">
      <div className="flex flex-col gap-2">
        <span
          style={{ color: isDarkMode ? color.myWhite : color.myBlack }}
          className="font-medium"
        >
          Frequency :{" "}
        </span>
        <p className="text-sm">{weeks} times a week</p>
      </div>
      <div
        style={{ color: isDarkMode ? color.myWhite : color.myBlack }}
        className="flex gap-2 items-center"
      >
        <button
          className={`bg-${color.myGreen}`}
          onClick={() => updateCounter("down")}
        >
          <Minus size={14} />
        </button>
        <p style={{ color: color.myGreen, fontWeight: "bold" }}>{weeks}</p>
        <button onClick={() => updateCounter("up")}>
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

function Reminder() {
  const { darkModeObject, timePickerObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { setOpenTimePickerWindow } = timePickerObject;

  const [showTimer, setShowTimer] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 p-3 mt-2">
      <div className="flex justify-between">
        <p>Daily Notification</p>
        <div
          style={{ backgroundColor: isDarkMode ? color.myGrey : color.myWhite }}
          className={`${
            showTimer ? "justify-end" : "justify-start opacity-70"
          } border w-14 h-7 flex items-center rounded-2xl px-1 cursor-pointer`}
          onClick={() => setShowTimer(!showTimer)}
        >
          <div
            className="h-5 w-5 rounded-full"
            style={{ backgroundColor: color.myGreen }}
          />
        </div>
      </div>

      {showTimer && (
        <div className="flex justify-between p-2 m-2 mt-4 rounded-md">
          <span>Select Time</span>
          <div
            className="flex gap-2 items-center justify-center cursor-pointer select-none"
            onClick={() => setOpenTimePickerWindow(true)}
          >
            <span>8 : 00 AM</span>
            <ArrowDown />
          </div>
        </div>
      )}
    </div>
  );
}

function SaveButton({ habit }: { habit: HabitType }) {
  return (
    <div className="w-full flex justify-center mt-2">
      <button
        className="bg-myGreen px-4 py-2 rounded-md text-white"
        onClick={() => console.log(habit)}
      >
        Add a Habit
      </button>
    </div>
  );
}
