"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../Styles/Hero.css";

type HeroProps = {
  theme: string;
};

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);

  const phrases = useMemo(
    () => ["JavaScript Developer", "Frontend Developer", "Web Developer"],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      setText((prev) => {
        const currentPhrase = phrases[index];
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && text === phrases[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
        setDelay(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        setDelay(100);
      }
    };

    const typingTimeout = setTimeout(handleTyping, delay);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, delay, phrases]);

  return (
    <section className={`hero-section ${theme === "dark" ? "dark" : ""}`}>
      <div className="hero-image">
        <Image
          src="/profile2.jpg"
          alt="Profile"
          width={200}
          height={200}
          priority
          className="rounded-full"
          style={{
            boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.6)",
          }}
        />
      </div>
      <h1 className="hero-heading hero-heading-md">Hello, I&apos;m Areeb</h1>
      <p className="hero-paragraph hero-paragraph-md">
        <span>I&apos;m a </span>
        <span className="hero-highlight">{text}</span>
        <span className="blink"></span>
      </p>

      <div className="flex space-x-4">
        <Link href="#contact" className="hero-button">
          Contact Me
        </Link>
        <a
          href="/Areeb_CV.pdf"
          download
          className="hero-button hero-button-gray hero-button-flex"
        >
          Resume <FaArrowUpRightFromSquare />
        </a>
      </div>
    </section>
  );
};

export default Hero;
