import React from "react";
import useTheme from "../contexts/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeButton() {
  const { themeMode, lightMode, darkMode } = useTheme();
  const handleChange = (e) => {
    const currentTheme = e.currentTarget.checked;
    currentTheme ? darkMode() : lightMode();
  };
  return (
    <>
      <label
        htmlFor="themebtn"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border bg-white px-3 py-1.5 duration-500 dark:bg-gray-700 dark:text-white"
      >
        <input
          type="checkbox"
          value=""
          id="themebtn"
          onChange={handleChange}
          checked={themeMode === "dark"}
          hidden
        />
        <span>
          {themeMode === "light" ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </span>
        <span className="capitalize">{`${themeMode} mode`}</span>
      </label>
    </>
  );
}

export default ThemeButton;
