"use client";

import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div
      className={`bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText min-h-screen transition-colors duration-300`}
    >
      {/* Header Section */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* About Section */}
      <About theme={theme} />

      {/* Skills Section */}
      <Skills theme={theme} />

      {/* Projects Section */}
      <Projects theme={theme} />

      {/* Contact Section */}
      <Contact theme={theme} />

      {/* Footer Section */}
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
