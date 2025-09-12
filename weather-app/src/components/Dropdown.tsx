import { useState, useRef, useEffect } from "react";

import UnitIcon from "../assets/icons/units-icon.svg?react";
import UnitDropdownIcon from "../assets/icons/units-dropdown-icon.svg?react";

type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  label: string;
  role?: string;
};

function Dropdown({ children, className, role, label }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-2.5 rounded-lg cursor-pointer bg-neutral-800 px-3 py-2 text-sm font-medium focus:outline-none group"
      >
        <UnitIcon
          className="size-4 group-hover:rotate-45 transition-transform duration-300"
          aria-hidden="true"
        />
        <span>{label}</span>
        <UnitDropdownIcon
          className={`size-3 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown menu, show/hide based on menu state. */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 rounded-lg bg-neutral-800 divide-y divide-neutral-600 p-2"
          role={role || "menu"}
          aria-orientation="vertical"
          aria-labelledby={`${role}-button`}
          tabIndex={-1}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
