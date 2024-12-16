import React, { useState, useRef } from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground"; 

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="home-page">
            <ParticlesBackground />
        <div className="home-container">
            
            <div className="profile-section">
                <img src="/images/MOSA CROP.png" alt="Your Profile" className="profile-picture" />
                <h1>Welcome!</h1>
                <h2>Hello from my Portfolio!!! (˶˃ᆺ˂˶)</h2>
                <p>
                     My Name is Emma! (Ekiizu)
                </p>

                <p> 
                    Feel free to browse my work and see what I’ve been working on!
                </p>
                  
                
                
                <button 
                    onClick={toggleMusic} 
                    className={`button ${isPlaying ? "is-danger" : "is-dark"} is-small`}
                >
                    {isPlaying ? "Pause" : "Play Music"}
                </button>
                <audio ref={audioRef} loop>
                    <source src="/mp3/P5 Beneath the Mask.mp3" type="audio/mpeg" />
                </audio>
            
            </div>

            

           
            
        </div>
        </div>
    );
};

export default Home;
