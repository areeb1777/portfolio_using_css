"use client";

import Image from "next/image";
import Link from "next/link";
import "../Styles/Projects.css";

type ProjectsProps = {
  theme: string;
};

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  return (
    <section
      id="projects"
      className={`projects-section ${theme === "dark" ? "dark" : "light"}`}
    >
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/youtube.png"
            width={800}
            height={800}
            alt="Project 1"
            className="project-image"
          />
          <h3 className="project-title">YouTube Thumbnail Designer</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            Create visually appealing YouTube thumbnails with ease. This tool
            offers a simple interface for thumbnail creation with customizable
            text, colors, and background images. Tech Stack: HTML, CSS,
            JavaScript
          </p>
          <Link
            href="https://youtube-thumbnail-design.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 2 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/currency-convertor.png"
            width={800}
            height={800}
            alt="Project 2"
            className="project-image"
          />
          <h3 className="project-title">Real-Time Currency Converter</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            Convert between multiple currencies instantly with this powerful
            currency converter. Integrated with live exchange rates for accuracy
            and reliability. Tech Stack: JavaScript, REST APIs
          </p>
          <Link
            href="https://currencyconvertor-nu.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 3 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/hackathon-milestone5.png"
            width={800}
            height={800}
            alt="Project 3"
            className="project-image"
          />
          <h3 className="project-title">Editable Resume Builder</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            Build and customize your resume effortlessly. This dynamic resume
            builder allows you to edit sections on the fly and share your resume
            with a unique URL. Tech Stack: TypeScript, HTML, CSS
          </p>
          <Link
            href="https://areebresume-milestone-5.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 4 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/netflix-clone.png"
            width={800}
            height={800}
            alt="Project 4"
            className="project-image"
          />
          <h3 className="project-title">Netflix Clone</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            A sleek Netflix-inspired front end, showcasing a movie grid layout
            with hover effects. A visually engaging UI for video streaming
            platforms. Tech Stack: HTML, CSS
          </p>
          <Link
            href="https://netflix-clone-lyart-zeta-83.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 5 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/amazon-clone.png"
            width={800}
            height={800}
            alt="Project 5"
            className="project-image"
          />
          <h3 className="project-title">Amazon Clone - Front Page</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            A replica of Amazon’s homepage with product categories. Demonstrates
            an e-commerce front-end layout. Tech Stack: HTML, CSS
          </p>
          <Link
            href="https://amazon-front-page-project.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 6 */}
        <div className={`project-card ${theme === "dark" ? "dark" : ""}`}>
          <Image
            src="/computer-acessories.png"
            width={800}
            height={800}
            alt="Project 6"
            className="project-image"
          />
          <h3 className="project-title">Computer Accessories Store</h3>
          <p
            className={`project-description ${theme === "dark" ? "dark" : ""}`}
          >
            A clean and responsive website for showcasing computer accessories.
            Designed for smooth navigation and product browsing. Tech Stack:
            HTML, CSS
          </p>
          <Link
            href="https://computer-accessories-project.vercel.app"
            target="_blank"
            className="project-link"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
