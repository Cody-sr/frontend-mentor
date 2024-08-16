import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import { ThemeButton, SearchInput } from "./components";

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
      <main className="h-svh duration-500 dark:bg-gray-900">
        <section className="bg-slate-500 py-4">
          <div className="container flex items-center justify-between">
            <SearchInput />
            <ThemeButton />
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
