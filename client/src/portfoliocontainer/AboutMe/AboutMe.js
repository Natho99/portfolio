import React,{ useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !==props.id);
        return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS= { 
        description:
        "I live in the moment. I dont see the future as a fixed destination. Instead, I see it as a place that I create out of the choices that I make right now. Change is constant and inevitable. As a professional, I steer, accept and respond to change. My versatility gives me the confidence to trust my own judgement and resourcefulness, resilience to overcome setbacks, and vision to imagine, create, and suggest alternatives.",
        highlights:{
            bullets:[
                "Full Stack web and mobile development",
                "Interactive front-end as per the design",
                "Managing Databases",
                "Managing Network and Network Security",
                "IOT practitioner",
                "White-Hat Hacker ",
                "Data Analyst",
            ],
            heading: "Here are a few highlights of my skills:"
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className="about-me-container screen-container " id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlights-heading'>
                            <span>{SCREEN_CONSTANTS.highlights.heading} </span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                        <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='KimutaiCV.pdf' download='Nathan KimutaiCV.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>

      );

}
