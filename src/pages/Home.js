import React from 'react';
import '../index.css'; // Make sure to import your custom CSS if you're using an external CSS file

const Home = () => {
    return (
        <div className="home-container">
            <h1>Hello from Home Page!!! (˶˃ᆺ˂˶)</h1>
            <img 
                src="https://media.tenor.com/MWIAxMsqaGUAAAAi/glorp-gets-what-it-deserves.gif" 
                alt="Gif" 
                className="centered-gif" 
            />
        </div>
    );
};

export default Home;
