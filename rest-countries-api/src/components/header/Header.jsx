import React from "react";
import { ThemeButton } from "../";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-10 bg-white py-4 shadow-lg duration-500 dark:bg-gray-700 dark:text-gray-200"
      role="header"
    >
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold" aria-label="Website Title">
            Where in the World?
          </h1>
        </Link>
        <ThemeButton aria-label="Toggle Theme" />
      </div>
    </header>
  );
}

export default React.memo(Header);
