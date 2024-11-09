'use client';

import React from "react";
import '../Styles/About.css';

type AboutProps = {
  theme: string;
};

const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section
      id="about"
      className={`about-section ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <h2 className="about-heading">
        About Me
      </h2>
      <p className="about-paragraph">
        I am a 21-year-old student of the Governor Sindh Kamran Khan Tessori
        Initiative for Artificial Intelligence, Web 3.0 & Metaverse, with
        expertise in modern technologies including HTML, CSS, JavaScript,
        Tailwind CSS, TypeScript, and Next.js. As a web developer, I am
        passionate about building innovative and scalable solutions that
        leverage the latest advancements in web development and emerging
        technologies. I strive to continuously improve my skills and stay
        updated with the rapidly evolving tech landscape.
      </p>
    </section>
  );
};

export default About;
