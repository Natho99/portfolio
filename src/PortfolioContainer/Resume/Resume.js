import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  // Updated Programming Skills
  const programmingSkillsDetails = [
    { skill: "JavaScript ", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "Data Analysis (R, Power BI, Excel)", ratingPercentage: 75 },
    { skill: "SQL (PostgreSQL, MySQL)", ratingPercentage: 70 },
    { skill: "C++, C, C#, Java", ratingPercentage: 65 },
    { skill: "PHP (Laravel, CodeIgniter)", ratingPercentage: 60 },
    // { skill: "HTML, CSS, WordPress, SEO", ratingPercentage: 85 },
  ];

const projectsDetails = [
  // --- Existing Projects ---
  {
    title: "Luxury furnished apartments System",
    duration: { fromDate: "01/2025", toDate: "04/2025" },
    description:
      "Developed a modern, user-friendly web-based accomodation System.",
    subHeading: (
      <>
        Technologies Used: Python, Web Integration. (Link: 
        <a 
          href="https://extendedstays.co.ke/" 
        >
          https://extendedstays.co.ke/
        </a>
        )
      </>
    ),
  },
  {
    title: "Nurulib School Library Management System",
    duration: { fromDate: "N/A", toDate: "N/A" },
    description:
      "A comprehensive desktop application designed to manage school library inventory, lending, and returns.",
    subHeading: (
      <>
        Technologies Used: Python, Tkinter. (Video Demo: 
        <a 
          href="https://youtu.be/oXXyTHfScFM" 
        >
          https://youtu.be/oXXyTHfScFM
        </a>
        )
      </>
    ),
  },
  // {
  //   title: "Fall Armyworm Population Dynamics Model (ICIPE)",
  //   duration: { fromDate: "03/2024", toDate: "08/2024" },
  //   description:
  //     "Developed a System Dynamics Model to support data-driven pest management strategies for ICIPE.",
  //   subHeading:
  //     "Technologies Used: Data Analysis & Modeling Techniques.", 
  // },
  
  // --- Newly Added Projects ---
  // {
  //   title: "One Stop Arcade Website",
  //   duration: { fromDate: "N/A", toDate: "N/A" },
  //   description: "Designed and maintained this website, showcasing various arcade features and services.",
  //   subHeading: (
  //     <>
  //       Technologies Used: Web Development. (Link: 
  //       <a 
  //         href="https://onestoparcade.com" 
  //       >
  //         https://onestoparcade.com
  //       </a>
  //       )
  //     </>
  //   ),
  // },
  // {
  //   title: "Extended Travels Website (Homepage)",
  //   duration: { fromDate: "N/A", toDate: "N/A" },
  //   description: "Designed and maintained the primary homepage for Extended Travels, a travel agency.",
  //   subHeading: (
  //     <>
  //       Technologies Used: Web Development. (Link: 
  //       <a 
  //         href="https://extendedtravels.co.ke" 
  //       >
  //         https://extendedtravels.co.ke
  //       </a>
  //       )
  //     </>
  //   ),
  // },
  // {
  //   title: "Extended Travels Website (Subpage)",
  //   duration: { fromDate: "N/A", toDate: "N/A" },
  //   description: "A secondary page/entry point within the Extended Travels website.",
  //   subHeading: (
  //     <>
  //       Technologies Used: Web Development. (Link: 
  //       <a 
  //         href="https://extendedtravels.co.ke/" 
  //       >
  //         https://extendedtravels.co.ke/
  //       </a>
  //       )
  //     </>
  //   ),
  // },
  // {
  //   title: "MaktabaMark (Desktop Library System)",
  //   duration: { fromDate: "N/A", toDate: "N/A" },
  //   description: "Developed a comprehensive desktop-based School Library Management System.",
  //   subHeading: (
  //     <>
  //       Technologies Used: Desktop Development. (Video Demo: 
  //       <a 
  //         href="https://youtu.be/oXXyTHfScFM" 
  //       >
  //         https://youtu.be/oXXyTHfScFM
  //       </a>
  //       )
  //     </>
  //   ),
  // },
];

  // Updated Resume Details (Education, Work History, Interests)
  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kenyatta University"}
        subHeading={"BACHELOR OF SCIENCE MATHEMATICS & COMPUTER SCIENCE (Second Class Honors)"}
        fromDate={"09/2019"}
        toDate={"04/2023"}
      />

      <ResumeHeading
        heading={"Bounty Analytica"}
        subHeading={"CERTIFICATE IN DATA SCIENCE"}
        fromDate={"09/2023"}
        toDate={"11/2023"}
      />
      <ResumeHeading
        heading={"KU Cisco Academy"}
        subHeading={"CISCO CERTIFIED NETWORK ADMINISTRATOR 1 & 2"}
        fromDate={"01/2021"}
        toDate={"04/2021"}
      />
      <ResumeHeading
        heading={"Alison"}
        subHeading={"SOFTWARE TESTING & QUALITY ASSURANCE"}
      />
      {/* <ResumeHeading
        heading={"Litein High School"}
        subHeading={"KENYA CERTIFICATE OF SECONDARY EDUCATION (KCSE)"}
        fromDate={"01/2015"}
        toDate={"11/2018"}
      /> */}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Fourth Generation Capital Limited"}
          subHeading={"Systems Support Officer (Entry Level)"}
          fromDate={"11/2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            • Recognized for excellence in ticket resolution with performance badges: Most Valuable Player, Customer Wow Champion, Wizard Speed Racer.
          </span>
          <br /> */}
          <span className="resume-description-text">
            • Analyzing, troubleshooting, evaluating, and resolving technology issues through ICT Tickets.
          </span>
          <br />
          <span className="resume-description-text">
            • Overseeing IT systems and assets and providing training and support as needed.
          </span>
          <br />
        </div>
        
        <ResumeHeading
          heading={"ICIPE (International Centre of Insect Physiology and Ecology)"}
          subHeading={"RESEARCH INTERN"}
          fromDate={"03/2024"}
          toDate={"08/2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Performed Data analysis & modeling, Literature Review, documentation, and quality assurance.
          </span>
          {/* <br />
          <span className="resume-description-text">
            • Developed a System Dynamics Model for Fall Armyworm Population Dynamics at ICIPE.
          </span> */}
          <br />
          {/* <span className="resume-description-text">
            • Collaborated with teams, learning about various data modeling techniques, and contributing to ongoing projects.
          </span>
          <br /> */}
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS (Kept placeholder, data is defined above) */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS (Kept placeholder, data is defined above) */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* INTERESTS */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Technology & Innovation"
        description="I am passionate about building innovative solutions, particularly in cross-platform development and data analysis, seeking to leverage technology to solve real-world problems."
      />
      <ResumeHeading
        heading="Data Science"
        description="Fascinated by the power of data analysis and modeling, I enjoy transforming complex datasets into actionable insights to drive strategic decisions."
      />
      <ResumeHeading
        heading="Leadership & Mentoring"
        description="Skilled in leadership and teamwork, I prioritize sharing knowledge and mentoring others, fostered by my educational background and collaborative experience."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;