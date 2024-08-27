import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components";
import { ThemeProvider } from "../contexts/theme";

function Root() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").className = themeMode;
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <ScrollRestoration />
      <Header />
      <main className="min-h-svh bg-slate-100 px-2 py-20 duration-500 dark:bg-gray-900">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default Root;
