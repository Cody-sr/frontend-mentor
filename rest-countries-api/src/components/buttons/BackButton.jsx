import React from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons";

function BackButton() {
  const navigate = useNavigate();
  return (
    <section className="container py-4">
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-white px-4 py-1 dark:bg-slate-500 dark:text-white"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <BackIcon size={18} aria-hidden="true" />
        <span>Back</span>
      </button>
    </section>
  );
}

export default BackButton;
