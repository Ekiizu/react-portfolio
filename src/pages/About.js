import React from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground"; 

const About = () => {
    return (
        <div className="about-page">
            <ParticlesBackground />
            <div className="about-container">
                <div className="profile-section">
                    
                    <img src="/images/MOSA CROP.png" alt="Your Profile" className="profile-picture" />

                    <h1>About Me</h1>
                    <p>
                        Hello, My name is Emma, ooh long ass paragraph about me as a person and how cool and talented I am and also why you should hire me 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
