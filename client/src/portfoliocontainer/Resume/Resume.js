import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import Footer from "../footer/Footer";




const Resume = (props) => {
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

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage:80 },
    {skill: "React JS", ratingPercentage:70 },
    {skill: "Node JS", ratingPercentage:65},
    {skill: "Java", ratingPercentage:80 },
    {skill: "C++", ratingPercentage:85 },
    {skill: "C", ratingPercentage:80 },
    {skill: "C#", ratingPercentage:75 },
    {skill: "HTML", ratingPercentage:85 },
    {skill: "CSS", ratingPercentage:90 },
    {skill: "Python", ratingPercentage:80 },
    {skill: "JSON", ratingPercentage:65 },
    {skill: "Fortran", ratingPercentage:85 },
    {skill: "MYSQL", ratingPercentage:90 },
    {skill: "PHP", ratingPercentage:80 },
    {skill: "Kotlin", ratingPercentage:85 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Web-based Church Management System",
      duration: {fromDate: "September,2021", toDate: "February,2022"},
      description:
      "A Sophisticated management system to assist my church manage members attendance,finances and all the critical church operations",
      subHeading: "Technologies used: PHP,JavaScript,Bootstrap,HTML,CSS,MYSQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kenyatta University,Kenya"}
        subHeading={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Alison,Galway-Ireland"}
        subHeading={"Advanced Diploma in Computer Networking"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Oxford Home Study Centre"}
        subHeading={"Diploma in Cyber Security"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Litein High School,Kericho-Kenya"}
        subHeading={"Kenya Certificate of Secondary Education"}
        fromDate={"2015"}
        toDate={"2018"}
      />
       <ResumeHeading
        heading= {"Bishop Ndingi Primary School,Nakuru"}
        subHeading={"Kenya Certificate of Primary Education"}
        fromDate={"2007"}
        toDate={"2014"}
        />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Volunteer at Episo Foundation Brookhaven, USA"}
          subHeading={"Customer Database (CRM) Set Up"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Currently volunteering at Episo Foundation to set up their Customer Relationship Management (CRM) system to track their donor, volunteer, and constituent database needs more effectively.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
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

    /* PROJECTS */
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

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Love and Interest for Movies"
        description="When I get bored and I mean really bored, I like to see action oriented movies such as 'The Expandables' or 'Bullet to the Head' just to name a few.It really lits the inner fire in me and get me pumped up and excited."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
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
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
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
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} /> 				  	                <Footer />

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
