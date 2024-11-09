'use client';

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../Styles/Footer.css';

type FooterProps = {
  theme: string;
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`footer ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-links">
          <Link
            href="https://github.com/areeb1777"
            target="_blank"
            className={`footer-link ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-areeb-a295192b5"
            target="_blank"
            className={`footer-link ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/areeb_17777"
            target="_blank"
            className={`footer-link ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            <FaSquareXTwitter />
          </Link>
          {/* Add more social links as needed */}
        </div>
        <p className={`footer-copy ${theme === 'dark' ? 'dark' : 'light'}`}>
          &copy; 2024 Areeb Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
