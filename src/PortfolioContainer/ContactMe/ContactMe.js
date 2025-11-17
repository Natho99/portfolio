import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";

// NOTE: Update these paths if necessary
import imgBack from "../../../src/images/mailz.jpeg"; 
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

// Your fixed email address for direct contact
const FALLBACK_EMAIL = "nathanngetich5@gmail.com";

// IMPORTANT: Define your server URL here
const API_BASE_URL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000/api/contact' // Match your Express server port/path
    : '/api/contact'; // Relative path for production deployment

export default function ContactMe(props) {
    // --- Fade-in animation logic (unchanged) ---
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    useEffect(() => {
        return () => {
            if (fadeInSubscription) {
                fadeInSubscription.unsubscribe();
            }
        };
    }, [fadeInSubscription]);

    // --- State variables (unchanged except for use) ---
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState(""); 
    const [bool, setBool] = useState(false); 
    const [showFallback, setShowFallback] = useState(false); 

    // --- Handlers (unchanged) ---
    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleMessage = (e) => setMessage(e.target.value);

    const copyEmailToClipboard = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(FALLBACK_EMAIL);
            toast.info("Email address copied to clipboard!");
        } else {
            toast.warn("Could not copy. Please select and copy the email address manually.");
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setShowFallback(false); 
        setBanner(""); 

        // --- 1. Client-Side Validation ---
        if (!name || !email || !message) {
            const validationMsg = "Please fill all required fields!";
            toast.error(validationMsg);
            setBanner(validationMsg);
            return; 
        }
        
        setBool(true); // Start loading

        try {
            let data = { name, email, message };
            const res = await axios.post(API_BASE_URL, data);
            
            if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                const errorMsg = res.data.msg || "An unexpected issue occurred.";
                setBanner(errorMsg);
                toast.error(errorMsg);
                setShowFallback(true); 
            }
        } catch (error) {
            console.error("Submission Error:", error);
            
            let errorMsg = "Failed to send message. Please check your network or try again.";
            if (error.response && error.response.data && error.response.data.msg) {
                errorMsg = error.response.data.msg;
            } else if (error.code === 'ERR_NETWORK') {
                errorMsg = "A network error occurred. Is the server running?";
            }
            
            setBanner(errorMsg); 
            toast.error(errorMsg);
            setShowFallback(true); 
            
        } finally {
            setBool(false);
        }
    };
    
    return (
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <TypeAnimation
                            sequence={["Send a Message 📧", 1000]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h2>{" "}
                    {/* Social links */}
                    <div className="social-links">
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" /></a>
                         {/* ... (Your other social link code remains here) ... */}
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square" /></a>
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus-square" /></a>
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-square" /></a>
                         <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
                    </div>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="contact background" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p className={`banner-message ${banner.includes("success") ? 'success' : banner ? 'error' : ''}`}>{banner}</p>
                        
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleName} value={name} />

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email} />

                        <label htmlFor="message">Message</label>
                        <textarea onChange={handleMessage} value={message} />

                        <div className="send-btn">
                            <button type="submit" disabled={bool}>
                                Send Message
                                <i className="fa fa-paper-plane" />
                                {bool && (
                                    <b className="load">
                                        <img src={load1} alt="Loading spinner" />
                                    </b>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* UPDATED: Fallback Email Section (Visible on failure) */}
                    {showFallback && (
                        <div className="email-fallback">
                            <button 
                                className="close-fallback-btn" 
                                onClick={() => setShowFallback(false)}
                                title="Close fallback email section"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                            <p>
                                <i className="fa fa-warning"></i> Email failed to send. Please contact me directly:
                            </p>
                            <div className="email-link-container">
                                <a href={`mailto:${FALLBACK_EMAIL}`} className="email-link">
                                    {FALLBACK_EMAIL}
                                </a>
                                <button 
                                    type="button" 
                                    onClick={copyEmailToClipboard}
                                    className="copy-button"
                                    title="Copy email to clipboard"
                                >
                                    <i className="fa fa-copy"></i> Copy
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}