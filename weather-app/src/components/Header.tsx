import Logo from "../assets/logo/logo.svg?react";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <header className="container mx-auto px-4 pt-12 text-white">
      <nav className="flex justify-between items-center">
        <div className="inline-flex items-center gap-x-2.5">
          <Logo className="h-10 w-10" aria-hidden />
          <span className="font-bold text-2xl capitalize">Weather App</span>
        </div>
        <Dropdown label="Units" >hello</Dropdown>
      </nav>
    </header>
  );
}

export default Header;
