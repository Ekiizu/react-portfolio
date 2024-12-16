import React from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground"; 

const About = () => {
    return (
        <div className="about-page">
            <ParticlesBackground />
            <div className="about-container">
                <div className="profile-section">
                    {/* <img src="/images/MOSA CROP.png" alt="Your Profile" className="profile-picture" /> */}
                    <h1>About Me</h1>
                    <p>
                        I'm into Blur, Persona and Art, I'm not very interesting I'll be entirely honest.
                    </p>
                    <img 
                src="https://media.tenor.com/MWIAxMsqaGUAAAAi/glorp-gets-what-it-deserves.gif" 
                alt="Gif" 
                className="centered-gif" 
            />

                <div className="artwork-section">
                    
                    <div className="artwork-gallery">
                        <img src="/images/yunjin.png" alt="Yunjin" className="artwork" />
                        <img src="/images/ruthcrop.png" alt="Ruth" className="artwork" />
                        <img src="/images/sherlock.png" alt="Sherlock" className="artwork" />
                    </div>
                </div>


          

                </div>

           
            </div>
        </div>
    );
};

export default About;

