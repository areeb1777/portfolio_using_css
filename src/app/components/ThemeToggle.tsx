"use client";

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../Styles/ThemeToggle.css";

type ThemeToggleProps = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-button ${theme === "dark" ? "dark" : ""}`}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
      <span className="theme-toggle-text">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
