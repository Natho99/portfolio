import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import charity from "../../../src/img/Testimonial/charity.jpeg";
import sokame from "../../../src/img/Testimonial/sokame.png";
import vicky from "../../../src/img/Testimonial/vicky.jpeg";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // --- REFEREE DATA (Cleaned for JavaScript syntax) ---
const refereeData = [
    {
      name: "Charity Maina",
      title: "ICT Lead, 4G Capital Limited - Supervisor",
      comment: "Highly recommend Nathan for his excellent ticket resolution and recognized achievements as an IT Operations intern, including performance badges like Most Valuable Player, Wizard and Speed Racer.",
      image: charity,
    },
    {
      name: "Dr Bonoukpoė Sokame",
      title: "Postdoctoral Fellow, ICIPE - Supervisor",
      comment: "Can attest to Nathan's strong technical skills in data analysis and modeling, specifically his work on developing a System Dynamics Model for Fall Armyworm Population Dynamics.",
      image: sokame,
    },
    {
      name: "Victoria Odhiambo",
      title: "GIS Analyst at ICIPE - Colleague",
      comment: "Nathan is a dependable professional whose collaborative spirit and strong work ethic were instrumental in documentation and quality assurance during our research projects.",
      image: vicky,
    },
  ];
  // --- END REFEREE DATA ---

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const renderReferees = () => {
    return refereeData.map((referee, index) => (
      <div className="col-lg-12" key={index}>
        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left" />
              {referee.comment}
              <i className="fa fa-quote-right" />
            </p>
            {/* Stars kept for visual style */}
            <ul className="stars list-unstyled">
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star-half-alt" />
              </li>
              <li>
                <i className="fa fa-star" />
              </li>
            </ul>
          </div>
          <div className="client-info">
            <img src={referee.image} alt={`Referee ${referee.name}`}></img>
            <h5>{referee.name}</h5>
            <p>{referee.title}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <ScreenHeading
        title={"References"} 
        subHeading={"Professional contacts available upon request"} 
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {renderReferees()}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
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