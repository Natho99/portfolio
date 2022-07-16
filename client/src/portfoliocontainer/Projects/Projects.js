import React,{ useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Projects.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Footer from "../footer/Footer";

import a from "./a.png";
import b from  "./b.png";
import c from  "./c.png";
import d from  "./d.png";
import e from  "./e.png";
import f from  "./f.png";
import g from  "./g.png";
import h from  "./h.png";
import i from  "./i.png";
import j from  "./j.png";
import k from  "./k.png";
import l from  "./l.png";
import m from  "./m.png";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const images = [
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
        ];
    return (
        <div className="main-container screen-container " id={props.id || ""}>

          <ScreenHeading subHeading={"Here is a show of some of my projects"} title={"My Projects"} />
	                <Footer />

        <Slide>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                <span>Restaurant Management System</span>
            </div>
            </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <span>Restaurant Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                <span>Restaurant Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[9]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[10]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[11]})` }}>
                <span>Church Management System</span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[12]})` }}>
                <span>Simple Personal Website</span>
            </div>
        </div>
    </Slide>
    </div>
    );
    };
