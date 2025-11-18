import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

// Import images (assuming they are in the same directory as the component)
import imgA from "../../assets/Projects/a.png";
import imgB from "../../assets/Projects/b.png";
import imgC from "../../assets/Projects/c.png";
import imgD from "../../assets/Projects/d.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projectsData = [
    {
      title: "One Stop Arcade",
      description: "Designed and maintained this website, showcasing various arcade features and services.",
      link: "https://onestoparcade.com",
      image: imgA,
    },
    {
      title: "Extended Travels",
      description: "Designed and maintained the primary homepage for Extended Travels, a travel agency.",
      link: "https://extendedtravels.co.ke",
      image: imgB,
    },
    {
      title: "Extended Stays",
      description: "Built a modern, user-friendly website, highlighting long and short term accommodation offerings within the Extended Travels ecosystem.",
      link: "https://extendedstays.co.ke/",
      image: imgC,
    },
    {
      title: "MaktabaMark (Desktop LMS)",
      description: "Developed MaktabaMark, a comprehensive desktop-based School Library Management System.",
      link: "https://youtu.be/mmA_5iPwfuc",
      image: imgD,
      isExternalLink: true,
    },
  ];

  const renderProjectCards = () => {
    return projectsData.map((project, index) => (
      <div className="project-card" key={index}>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          <div className="project-screenshot-container">
            <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-screenshot" />
            <div className="project-link-overlay">
                <i className="fa fa-external-link-alt"></i> View Project
            </div>
          </div>
          <div className="project-details">
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <div className="projects-container screen-container fade-in" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"My Work Portfolio"} />
        
        <div className="projects-content">
            {renderProjectCards()}
        </div>

      </div>
      <div className="scroll-container">
            <button
              className="btn-scroll"
              onClick={() => ScrollService.scrollHandler.scrollToHome()}
            >
              {" "}
              <i className="fa fa-arrow-up"></i>
            </button>
          </div>
    </div>
  );
}