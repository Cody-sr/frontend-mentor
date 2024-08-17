import React from "react";
import { ThemeButton } from "./index";

function HeaderSection() {
  return (
    <header className="bg-slate-500 py-4 text-white">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold">Where in the World?</h1>
        <ThemeButton />
      </div>
    </header>
  );
}

export default HeaderSection;
