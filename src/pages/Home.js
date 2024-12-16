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
        <div className="home-container">
            <h1>Hello from Home Page!!! (˶˃ᆺ˂˶)</h1>
            <img 
                src="https://media.tenor.com/MWIAxMsqaGUAAAAi/glorp-gets-what-it-deserves.gif" 
                alt="Gif" 
                className="centered-gif" 
            />
            <div className="about-page">
            <ParticlesBackground />
            <div className="about-container">
                <div className="profile-section">
                    
                    <img src="/images/MOSA CROP.png" alt="Your Profile" className="profile-picture" />

                    <h1>WELCOME</h1>
                    <p>
                        Hello, My name is Emma, ooh long ass paragraph about me as a person and how cool and talented I am and also why you should hire me 
                    </p>
                </div>
            </div>
        </div>

            {/* wanted to add music */}
            <button onClick={toggleMusic}>
                {isPlaying ? "Pause" : "Play Music"}
            </button>
            <audio ref={audioRef} loop>
                <source src="/mp3/P5 SMASH.mp3" type="audio/mpeg" />
            </audio>
                </div>
            );
};

export default Home;
