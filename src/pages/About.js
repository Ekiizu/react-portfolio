import React from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground";

const About = () => {
    return (
        <div className="about-page">
            <ParticlesBackground />
            <div className="about-container">
                <div className="profile-section">
                    
                    <h1>About Me</h1>
                        <h2>-`♡´-</h2>
                    <p>
                      Hello!, My name is <strong>Emma</strong> (Ekiizu) 
                    </p>
                    <p>
                        I'm currently in my third year of study in creative computing in IADT, Dún Laoghaire!
                    </p>
                    <p>
                        I am passionate about art, music and gaming. I sell my art at DCC when I can and enjoy the Visual Design and UI/UX side to computing.
                    </p>

                    <p>
                        I'm a huge fan of the Persona Series, Ace Attorney and you can usually find me drawing or listening to music.
                    </p>
                   

                    
                    <div className="artwork-section">
                        <h1>Art</h1>
                       
                        <div className="artwork-gallery">
                            <img src="/images/yunjin.png" alt="Yunjin" className="artwork" />
                            <img src="/images/ruthcrop.png" alt="Ruth" className="artwork" />
                            <img src="/images/sherlock.png" alt="Sherlock" className="artwork" />
                        </div>

                        <p> <a href="https://www.instagram.com/ekiizu/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i> instagram.com/ekiizu</a></p>

                        
                    </div>

                    {/* <h1>Music</h1> */}
                        
                    
                    

                </div>
            </div>
        </div>
    );
};

export default About;
