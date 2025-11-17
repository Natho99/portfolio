import React from "react";
import { TypeAnimation } from "react-type-animation"; // 👈 UPDATED IMPORT
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* Added LinkedIn URL */}
              <a href="https://linkedin.com/in/nathan-kimutai-b93854185" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" />
              </a>
              {/* Removed unnecessary social links */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nathan Kimutai</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {/* 👈 UPDATED COMPONENT USAGE */}
                <TypeAnimation
                  sequence={[
                    "Computer Scientist 💻", 3000,
                    "Full Stack Dev 🌐", 3000,
                    "Data Analyst & Modeler 📊", 3000,
                    "Skilled in PHP & Python 🐍", 3000,
                    "IT Operations Specialist ⚙️", 3000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Inquisitive and energetic specialist skilled in leadership, math, logic, and cross-platform coding.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Contact Me </button>
            {/* Updated resume download link */}
            <a href="Nathan-Resume.pdf" download="Nathan-Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}