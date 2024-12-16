import React from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground"; 

const Contact = () => {
    return (
        <div className="contact-page">
            <ParticlesBackground />
            <div className="contact-container">
                <div className="contact-section">
                <img src="/images/MOSA CROP.png" alt="Your Profile" className="profile-picture" />
                    <h1>Contact Me</h1>
                    

                    <div className="contact-info">
                    <p> <a href="mailto:ekiizu2003@gmail.com"><i className="fa fa-envelope"></i> ekiizu2003@gmail.com</a></p>
                    
                    <p> <a href="https://www.linkedin.com/in/emma-ann-hynes-6a7572329/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i> linkedin.com/in/emma-ann-hynes</a></p>
                    
                    <p><a href="https://github.com/Ekiizu" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> github.com/Ekiizu</a></p>
                    
                    <p> <a href="https://www.instagram.com/ekiizu/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i> instagram.com/ekiizu</a></p>
                    </div>

                    
                    <div>
                    <h2>CV</h2>
                    
                    <embed
                    src="/file/Emma Hynes CV 2024.pdf" 
                    width="100%" 
                    height="400px" 
                    title="PDF Viewer"
                     />
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default Contact;
