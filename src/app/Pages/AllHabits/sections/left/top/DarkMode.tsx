import { useGlobalContextProvider } from "@/app/context-api";
import { color } from "@/color";
import { Sun, Moon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

export default function DarkMode() {
  const { darkModeObject } = useGlobalContextProvider();
  const { darkModeItems, isDarkMode, setDarkMode, setDarkModeItems } =
    darkModeObject;

  const handleClickItem = (singleItemIndex: number) => {
    const updatedDarkModeItems = darkModeItems.map((darkModeItem, index) => {
      if (singleItemIndex === index) {
        return { ...darkModeItem, isSelected: true };
      }
      return { ...darkModeItem, isSelected: false };
    });
    setDarkModeItems(updatedDarkModeItems);
  };

  useEffect(() => {
    darkModeItems.forEach((singleItem) => {
      if (singleItem.id === 1 && singleItem.isSelected) {
        setDarkMode(false);
      }
      if (singleItem.id === 2 && singleItem.isSelected) {
        setDarkMode(true);
      }
    });
  }, [darkModeItems, setDarkMode]);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? color.myGrey : "",
      }}
      className="flex bg-slate-100/80 w-[90px] relative rounded-3xl"
    >
      {darkModeItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClickItem(index)}
          className="h-full w-[45px] z-40 flex justify-center items-center"
        >
          {item.id === 1 ? (
            <div
              style={{
                backgroundColor: isDarkMode ? "" : "white",
              }}
              className="rounded-full p-[6px] cursor-pointer"
            >
              <Sun
                className={`${
                  item.isSelected ? "text-myGreen" : "text-gray-300"
                }`}
                size={20}
                weight={`${isDarkMode ? "regular" : "fill"}`}
              />
            </div>
          ) : (
            <div
              style={{
                backgroundColor: isDarkMode ? color.myBlack : "",
              }}
              className="rounded-full p-[6px] cursor-pointer"
            >
              <Moon
                className={`${item.isSelected ? "text-myGreen" : "text-black"}`}
                size={20}
                weight={`${isDarkMode ? "fill" : "regular"}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
