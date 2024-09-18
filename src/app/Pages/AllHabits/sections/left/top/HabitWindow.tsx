import { useGlobalContextProvider } from "@/app/context-api";
import { X, Icon, Tag, UserCircle } from "@phosphor-icons/react";
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

type FrequencyType = {
  type: string;
};

type HabitType = {
  _id: string;
  name: string;
  icon: Icon;
  frequency: FrequencyType[];
};

type RepeatOption = {
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
    icon: UserCircle,
    frequency: [{ type: "Daily" }],
  });

  const [openIconWindow, setOpenIconWindow] = useState<boolean>(false);
  const [SelectedIcon, setSelectedIcon] = useState<Icon>(UserCircle);

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
      className={`top-[3%] left-1/2 transform -translate-x-1/2 w-[80%] z-50 p-10 rounded-md shadow-md transition-all ${
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
      <Repeat onChangeOption={changeRepeatOption} />
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
    <div className="flex flex-col gap-2 mt-10 px-3">
      <span className="opactiy-80 font-semibold">Habit Name</span>
      <div className="flex gap-4 items-center justify-between">
        <input
          style={{
            backgroundColor: isDarkMode ? color.myGrey : "white",
            color: isDarkMode ? "white" : "",
          }}
          ref={inputRef}
          value={habitName}
          onChange={(val) => updateInputHabit(val)}
          className={`border w-full border-gray-200 outline-none p-4 rounded-md text-[13px] ${
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
}: {
  onChangeOption: (repeatOptions: RepeatOption[]) => void;
}) {
  const [repeatOptions, setRepeatOptions] = useState<RepeatOption[]>([
    { name: "Daily", isSelected: true },
    { name: "Weekly", isSelected: false },
  ]);

  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  function changeOption(indexClicked: number) {
    const updateRepeatOptions = repeatOptions.map((singleOption, idx) => {
      if (idx === indexClicked) {
        return { ...singleOption, isSelected: true };
      }
      return { ...singleOption, isSelected: false };
    });
    setRepeatOptions(updateRepeatOptions);
  }

  return (
    <div className="flex flex-col gap-2 mt-10 px-3">
      <span className="font-semibold text-[17px]">Repeat</span>
      <div className="flex gap-4 mt-2 items-center">
        {repeatOptions.map((singleOption, idx) => (
          <button
            key={idx}
            onClick={() => changeOption(idx)}
            style={{
              color: !singleOption.isSelected
                ? !isDarkMode
                  ? color.myGreen
                  : color.myGreen
                : "",
              backgroundColor: singleOption.isSelected
                ? !isDarkMode
                  ? color.myGreen
                  : color.myGreen
                : "",
            }}
            className="p-2 px-3 rounded-md text-white cursor-pointer"
          >
            {singleOption.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function SaveButton({ habit }: { habit: HabitType }) {
  return (
    <div className="w-full flex justify-center mt-9">
      <button
        className="bg-myGreen p-4 w-[98%] rounded-md text-white"
        onClick={() => console.log(habit)}
      >
        Add a Habit
      </button>
    </div>
  );
}
