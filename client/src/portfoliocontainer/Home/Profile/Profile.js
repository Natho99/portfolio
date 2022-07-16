import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
                </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/nathookim99/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/nathan-kimutai-b93854185">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://twitter.com/NathanN51284287?t=_BYrKtDTNqYcdp1_NJiLvA&s=09">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://wa.me/254700423736">
            <i className="fa fa-whatsapp" />
          </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Nathan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data Analyst 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Database Administrator 📱",
                    1000,
                    "Network Engineer🔴",
                    1000,
                    "Cyber Security Analyst🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Have a wide variety of coding niches, from databases,Network management to Data Analysis and Cyber Security
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
              <a href='KimutaiCV.pdf' download='Nathan KimutaiCV.pdf'>
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