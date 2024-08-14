import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import { ThemeButton } from "./components";

function App() {
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
      <p className="text-black dark:text-red-500">
        Click on the Vite and React logos to learn more
      </p>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
