import React from "react";
import { ThemeButton } from "../";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-slate-500 py-4 text-white">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold">Where in the World?</h1>
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
