import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    // FIX: All citation tags are removed to resolve the SyntaxError.
    description:
      "I am Nathan Kimutai, an energetic Computer Scientist with a strong foundation in math, logic, and cross-platform coding. I hold a Bachelor of Science in Mathematics & Computer Science (Second Class Honors) from Kenyatta University, along with certifications in Data Science and Cisco Certified Network Administrator 1 & 2.\n\n                                                                                 I am currently serving as an IT Operations assistant at Fourth Generation Capital Limited, where my work resolving technology issues earned me recognition as Most Valuable Player, Customer Wow Champion, and Wizard Speed Racer.",
    highlights: {
      bullets: [
        "Full-stack development (React JS, Node JS, PostgreSQL, Django)",
        "Data Analysis & Modeling (Data Science, R, Power Bi)",
        "Developed CSV Transformer to smoothen IT operations in Uganda",
        "Expert in analyzing, troubleshooting, and resolving technology issues (IT Tickets)",
        "Recognized for excellence in ticket resolution: MVP, Customer Wow Champion",
        "System Dynamics Modeling for data-driven pest management (ICIPE)",
        "Software Testing & Quality Assurance",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  // Function to handle the paragraph rendering by splitting the string
  const renderDescription = () => {
    // Split the description string by the newline marker and map each piece to a <p> tag
    return SCREEN_CONSTSANTS.description.split('\n\n').map((paragraph, index) => (
      // Using <p> tags forces the browser to treat each split piece as a separate paragraph
      <p key={index}>{paragraph}</p>
    ));
  };


  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            {/* RENDER DESCRIPTION USING THE NEW FUNCTION */}
            <div className="about-me-description"> 
              {renderDescription()}
            </div>
            
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a href="Nathan-Resume.pdf" download="Nathan-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}