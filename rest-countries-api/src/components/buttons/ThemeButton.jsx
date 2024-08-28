import React from "react";
import useTheme from "../../contexts/theme";
import { SunIcon, MoonIcon } from "../../assets/icons";

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
        className="inline-flex cursor-pointer items-center gap-2 duration-500 dark:text-gray-100"
      >
        <input
          type="checkbox"
          value=""
          id="themebtn"
          onChange={handleChange}
          checked={themeMode === "dark"}
          aria-label="Toggle theme"
          hidden
        />
        <span aria-hidden="true">
          {themeMode === "light" ? (
            <MoonIcon size={24} />
          ) : (
            <SunIcon size={24} />
          )}
        </span>
        <span className="hidden sm:block">
          {themeMode === "light" ? "Light mode" : "Dark mode"}
        </span>
      </label>
    </>
  );
}

export default ThemeButton;
