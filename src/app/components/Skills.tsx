"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "../Styles/Skills.css";

type SkillsProps = {
  theme: string;
};

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <section
      id="skills"
      className={`skills-section ${theme === "dark" ? "dark" : "light"}`}
    >
      <h2 className="skills-heading">Skills</h2>
      <div className="space-y-4">
        {/* Skill Item */}
        <div className="skill-item">
          <FaHtml5 className="skill-icon" style={{ color: "#e34f26" }} />
          <span className="skill-name">HTML</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "90%" }}></div>
          </div>
          <span className="skill-percentage">90%</span>
        </div>

        <div className="skill-item">
          <FaCss3Alt className="skill-icon" style={{ color: "#1572b6" }} />
          <span className="skill-name">CSS</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "85%" }}></div>
          </div>
          <span className="skill-percentage">85%</span>
        </div>

        <div className="skill-item">
          <IoLogoJavascript
            className="skill-icon"
            style={{ color: "#f7df1e", fontSize: "2.5rem" }}
          />
          <span className="skill-name">JavaScript</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "75%" }}></div>
          </div>
          <span className="skill-percentage">75%</span>
        </div>

        <div className="skill-item">
          <SiTypescript
            className="skill-icon"
            style={{ color: "#3178c6", fontSize: "2.5rem" }}
          />
          <span className="skill-name">TypeScript</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "75%" }}></div>
          </div>
          <span className="skill-percentage">75%</span>
        </div>

        <div className="skill-item">
          <FaReact
            className="skill-icon"
            style={{ color: "#61dafb", fontSize: "2.5rem" }}
          />
          <span className="skill-name">React</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "80%" }}></div>
          </div>
          <span className="skill-percentage">80%</span>
        </div>

        <div className="skill-item">
          <RiTailwindCssFill
            className="skill-icon"
            style={{ color: "#38b2ac", fontSize: "2.5rem" }}
          />
          <span className="skill-name">Tailwind</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "80%" }}></div>
          </div>
          <span className="skill-percentage">80%</span>
        </div>

        <div className="skill-item">
          <RiNextjsFill
            className="skill-icon"
            style={{
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: "9999px",
            }}
          />
          <span className="skill-name">Next.js</span>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: "75%" }}></div>
          </div>
          <span className="skill-percentage">75%</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
