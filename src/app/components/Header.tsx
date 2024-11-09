"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Header.css";

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className={`header ${theme === "dark" ? "dark" : ""}`}>
      <nav className="nav">
        <Link href="/" className={`logo ${theme === "dark" ? "dark" : ""}`}>
          Areeb Portfolio
        </Link>

        <div className="mobile-button md:hidden">
          <button
            onClick={toggleMenu}
            className={`button ${theme === "dark" ? "dark" : ""}`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="desktop-menu">
          <li>
            <Link
              href="#about"
              className={`link ${theme === "dark" ? "dark" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={`link ${theme === "dark" ? "dark" : ""}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={`link ${theme === "dark" ? "dark" : ""}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`link ${theme === "dark" ? "dark" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className={`button hidden md:flex ${
            theme === "dark" ? "dark" : ""
          } ml-auto`}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {menuOpen && (
          <ul
            className={`mobile-menu ${menuOpen ? "open" : ""} ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            <li>
              <Link
                href="#about"
                className={`link ${theme === "dark" ? "dark" : ""}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`link ${theme === "dark" ? "dark" : ""}`}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`link ${theme === "dark" ? "dark" : ""}`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`link ${theme === "dark" ? "dark" : ""}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className={`button ${theme === "dark" ? "dark" : ""}`}
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
