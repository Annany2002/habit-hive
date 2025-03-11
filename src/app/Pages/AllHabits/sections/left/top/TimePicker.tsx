<<<<<<< HEAD
import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { X } from "@phosphor-icons/react";
import { is } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";

export default function TimePicker({
  onSaveTime,
}: {
  onSaveTime: (timeVal: string) => void;
}) {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const { darkModeObject, timePickerObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { openTimePickerWindow, setOpenTimePickerWindow } = timePickerObject;

  const [time, setTime] = useState([
    { text: "11", isSelected: true },
    { text: "12", isSelected: false },
  ]);

  const [meridian, setMeridian] = useState([
    { text: "AM", isSelected: true },
    { text: "PM", isSelected: false },
  ]);

  const updateMeridianFn = (index: number) => {
    const updateMeridian = meridian.map((singleMeridian, idx) => {
      if (index === idx) {
        return { ...singleMeridian, isSelected: true };
      }
      return { ...singleMeridian, isSelected: false };
    });
    setMeridian(updateMeridian);
  };

  const updateTimeFn = (index: number) => {
    const updatedTimeValues = time.map((val, idx) => {
      if (index === idx) return { ...val, isSelected: true };
      return { ...val, isSelected: false };
    });
    setTime(updatedTimeValues);
  };

  const updateTimeValueText = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const timeValCopy = [...time];
    const currText = event.target.value;
    const parsedValue = parseInt(currText, 10);

    const isNumeric = /^\d+$/.test(currText);

    function isValidInput(
      currText: string,
      parsedValue: number,
      index: number
    ) {
      if (
        (index === 0 &&
          currText.length <= 2 &&
          parsedValue >= 0 &&
          parsedValue <= 12) ||
        (index === 1 &&
          currText.length <= 2 &&
          parsedValue >= 0 &&
          parsedValue <= 59) ||
        currText === ""
      ) {
        return true;
      }
      return false;
    }

    if (isNumeric && isValidInput(currText, parsedValue, idx)) {
      timeValCopy[idx].text = currText;
      setTime(timeValCopy);
    }
  };

  const onhandleBlur = (index: number) => {
    const timeValCopy = [...time];
    const currText = timeValCopy[index].text;

    if (currText === "") {
      timeValCopy[index].text = "00";
    } else if (currText.length === 1) {
      timeValCopy[index].text = `0${currText}`;
    }

    setTime(timeValCopy);
  };

  const saveTime = () => {
    const meridianSelected = meridian.filter(
      (singleMeridian) => singleMeridian.isSelected
    )[0].text;

    const selectedTimeFormatted = `${time[0].text}:${time[1].text} ${meridianSelected}`;
    onSaveTime(selectedTimeFormatted);
    setOpenTimePickerWindow(false);
  };

  useEffect(() => {
    if (openTimePickerWindow) {
      if (time[0].isSelected) {
        hoursRef.current?.focus();
      } else if (time[1].isSelected) {
        minutesRef.current?.focus();
      }
    }
  }, [openTimePickerWindow]);

  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      let currHours = now.getHours();
      const currMinutes = now.getMinutes().toString().padStart(2, "0");
      const amOrPm = currHours >= 12 ? "PM" : "AM";

      currHours = currHours % 12;
      currHours = currHours ? currHours : 12;

      const formattedHours = currHours.toString().padStart(2, "0");

      const timeValCopy = [...time];
      timeValCopy[0].text = formattedHours;
      timeValCopy[1].text = currMinutes;
      setTime(timeValCopy);

      const copyMeridian = meridian.map((singleMeridian) => {
        if (singleMeridian.text === amOrPm) {
          return { ...singleMeridian, isSelected: true };
        }
        return { ...singleMeridian, isSelected: false };
      });

      setMeridian(copyMeridian);
    }

    getCurrentTime();
  }, [openTimePickerWindow]);

  return (
    <div
      style={{ backgroundColor: isDarkMode ? color.myBlack : "white" }}
      className={`w-[413px] top-[89px] left-1/2 transform -translate-x-1/2 z-[99] p-6 rounded-md shadow-md ${
        openTimePickerWindow ? "absolute" : "hidden"
      }`}
    >
      <span className="font-bold flex justify-between items-center">
        <span>Select Time</span>
        <X
          className="cursor-pointer"
          onClick={() => setOpenTimePickerWindow(false)}
        />
      </span>

      <div className="flex gap-8 mt-9">
        <div className="flex gap-2 justify-center items-center">
          <input
            ref={hoursRef}
            value={time[0].text}
            onClick={() => updateTimeFn(0)}
            onChange={(e) => updateTimeValueText(e, 0)}
            onBlur={() => onhandleBlur(0)}
            readOnly={!time[0].isSelected}
            style={{
              backgroundColor: isDarkMode
                ? time[0].isSelected
                  ? color.myGreen
                  : "transparent"
                : time[0].isSelected
                ? color.myWhite
                : "",
              color: time[0].isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          />

          <span className="text-2xl font-bold">:</span>

          <input
            ref={minutesRef}
            value={time[1].text}
            onClick={() => updateTimeFn(1)}
            onChange={(e) => updateTimeValueText(e, 1)}
            onBlur={() => onhandleBlur(1)}
            readOnly={!time[1].isSelected}
            style={{
              backgroundColor: isDarkMode
                ? time[1].isSelected
                  ? color.myGreen
                  : "transparent"
                : time[1].isSelected
                ? color.myWhite
                : "",
              color: time[1].isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          {meridian.map((meriTime, _) => (
            <span
              key={_}
              style={{
                backgroundColor: isDarkMode
                  ? meriTime.isSelected
                    ? color.myGreen
                    : "transparent"
                  : meriTime.isSelected
                  ? color.myWhite
                  : "",
                color: meriTime.isSelected
                  ? isDarkMode
                    ? "white"
                    : color.myGreen
                  : "",
              }}
              className="text-xl flex justify-center items-center w-[80px] h-[45px] rounded-md cursor-pointer "
              onClick={() => updateMeridianFn(_)}
            >
              {meriTime.text}
            </span>
          ))}
        </div>
      </div>
      <button
        style={{ backgroundColor: color.myGreen }}
        className="p-3 text-white w-full rounded-md mt-10 mb-1"
        onClick={saveTime}
      >
        Save
      </button>
    </div>
  );
}
=======
import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { X } from "@phosphor-icons/react";
import { is } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";

export default function TimePicker({
  onSaveTime,
}: {
  onSaveTime: (timeVal: string) => void;
}) {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const { darkModeObject, timePickerObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { openTimePickerWindow, setOpenTimePickerWindow } = timePickerObject;

  const [time, setTime] = useState([
    { text: "11", isSelected: true },
    { text: "12", isSelected: false },
  ]);

  const [meridian, setMeridian] = useState([
    { text: "AM", isSelected: true },
    { text: "PM", isSelected: false },
  ]);

  const updateMeridianFn = (index: number) => {
    const updateMeridian = meridian.map((singleMeridian, idx) => {
      if (index === idx) {
        return { ...singleMeridian, isSelected: true };
      }
      return { ...singleMeridian, isSelected: false };
    });
    setMeridian(updateMeridian);
  };

  const updateTimeFn = (index: number) => {
    const updatedTimeValues = time.map((val, idx) => {
      if (index === idx) return { ...val, isSelected: true };
      return { ...val, isSelected: false };
    });
    setTime(updatedTimeValues);
  };

  const updateTimeValueText = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const timeValCopy = [...time];
    const currText = event.target.value;
    const parsedValue = parseInt(currText, 10);

    const isNumeric = /^\d+$/.test(currText);

    function isValidInput(
      currText: string,
      parsedValue: number,
      index: number
    ) {
      if (
        (index === 0 &&
          currText.length <= 2 &&
          parsedValue >= 0 &&
          parsedValue <= 12) ||
        (index === 1 &&
          currText.length <= 2 &&
          parsedValue >= 0 &&
          parsedValue <= 59) ||
        currText === ""
      ) {
        return true;
      }
      return false;
    }

    if (isNumeric && isValidInput(currText, parsedValue, idx)) {
      timeValCopy[idx].text = currText;
      setTime(timeValCopy);
    }
  };

  const onhandleBlur = (index: number) => {
    const timeValCopy = [...time];
    const currText = timeValCopy[index].text;

    if (currText === "") {
      timeValCopy[index].text = "00";
    } else if (currText.length === 1) {
      timeValCopy[index].text = `0${currText}`;
    }

    setTime(timeValCopy);
  };

  const saveTime = () => {
    const meridianSelected = meridian.filter(
      (singleMeridian) => singleMeridian.isSelected
    )[0].text;

    const selectedTimeFormatted = `${time[0].text}:${time[1].text} ${meridianSelected}`;
    onSaveTime(selectedTimeFormatted);
    setOpenTimePickerWindow(false);
  };

  useEffect(() => {
    if (openTimePickerWindow) {
      if (time[0].isSelected) {
        hoursRef.current?.focus();
      } else if (time[1].isSelected) {
        minutesRef.current?.focus();
      }
    }
  }, [openTimePickerWindow]);

  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      let currHours = now.getHours();
      const currMinutes = now.getMinutes().toString().padStart(2, "0");
      const amOrPm = currHours >= 12 ? "PM" : "AM";

      currHours = currHours % 12;
      currHours = currHours ? currHours : 12;

      const formattedHours = currHours.toString().padStart(2, "0");

      const timeValCopy = [...time];
      timeValCopy[0].text = formattedHours;
      timeValCopy[1].text = currMinutes;
      setTime(timeValCopy);

      const copyMeridian = meridian.map((singleMeridian) => {
        if (singleMeridian.text === amOrPm) {
          return { ...singleMeridian, isSelected: true };
        }
        return { ...singleMeridian, isSelected: false };
      });

      setMeridian(copyMeridian);
    }

    getCurrentTime();
  }, [openTimePickerWindow]);

  return (
    <div
      style={{ backgroundColor: isDarkMode ? color.myBlack : "white" }}
      className={`w-[413px] top-[89px] left-1/2 transform -translate-x-1/2 z-[99] p-6 rounded-md shadow-md ${
        openTimePickerWindow ? "absolute" : "hidden"
      }`}
    >
      <span className="font-bold flex justify-between items-center">
        <span>Select Time</span>
        <X
          className="cursor-pointer"
          onClick={() => setOpenTimePickerWindow(false)}
        />
      </span>

      <div className="flex gap-8 mt-9">
        <div className="flex gap-2 justify-center items-center">
          <input
            ref={hoursRef}
            value={time[0].text}
            onClick={() => updateTimeFn(0)}
            onChange={(e) => updateTimeValueText(e, 0)}
            onBlur={() => onhandleBlur(0)}
            readOnly={!time[0].isSelected}
            style={{
              backgroundColor: isDarkMode
                ? time[0].isSelected
                  ? color.myGreen
                  : "transparent"
                : time[0].isSelected
                ? color.myWhite
                : "",
              color: time[0].isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          />

          <span className="text-2xl font-bold">:</span>

          <input
            ref={minutesRef}
            value={time[1].text}
            onClick={() => updateTimeFn(1)}
            onChange={(e) => updateTimeValueText(e, 1)}
            onBlur={() => onhandleBlur(1)}
            readOnly={!time[1].isSelected}
            style={{
              backgroundColor: isDarkMode
                ? time[1].isSelected
                  ? color.myGreen
                  : "transparent"
                : time[1].isSelected
                ? color.myWhite
                : "",
              color: time[1].isSelected
                ? isDarkMode
                  ? "white"
                  : color.myGreen
                : "",
            }}
            className="w-[100px] text-[45px] p-4 rounded-md text-center outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          {meridian.map((meriTime, _) => (
            <span
              key={_}
              style={{
                backgroundColor: isDarkMode
                  ? meriTime.isSelected
                    ? color.myGreen
                    : "transparent"
                  : meriTime.isSelected
                  ? color.myWhite
                  : "",
                color: meriTime.isSelected
                  ? isDarkMode
                    ? "white"
                    : color.myGreen
                  : "",
              }}
              className="text-xl flex justify-center items-center w-[80px] h-[45px] rounded-md cursor-pointer "
              onClick={() => updateMeridianFn(_)}
            >
              {meriTime.text}
            </span>
          ))}
        </div>
      </div>
      <button
        style={{ backgroundColor: color.myGreen }}
        className="p-3 text-white w-full rounded-md mt-10 mb-1"
        onClick={saveTime}
      >
        Save
      </button>
    </div>
  );
}
>>>>>>> 627c8b0812ab5f349005c2619bec64ee5b05305f
