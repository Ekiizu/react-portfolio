import React from "react";
import "../css/index.css";
import ParticlesBackground from "../components/ui/ParticlesBackground"; 

const Contact = () => {
    return (
        <div className="contact-page">
            <ParticlesBackground />
            <div className="contact-container">
                <div className="contact-section">
                    <h1>Contact Me</h1>
                    <p>Gyatt damm</p>

                    <div className="contact-info">
                        <p><strong>Email:</strong> ekiizu2003@gmail.com</p>
                        
                        <p><strong>LinkedIn:</strong> <a href="www.linkedin.com/in/emma-ann-hynes" target="_blank" rel="noopener noreferrer">linkedin.com/in/emma-ann-hynes</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/Ekiizu" target="_blank" rel="noopener noreferrer">github.com/Ekiizu</a></p>
                        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/ekiizu/" target="_blank" rel="noopener noreferrer">instagram.com/ekiizu/</a></p>
                    </div>

                    <h2>Or Send Me a Message</h2>
                    <form className="contact-form">
                        <div className="field">
                            <label className="label" htmlFor="name">Name</label>
                            <div className="control">
                                <input className="input" type="text" id="name" name="name" required />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="email">Email</label>
                            <div className="control">
                                <input className="input" type="email" id="email" name="email" required />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="message">Message</label>
                            <div className="control">
                                <textarea className="textarea" id="message" name="message" rows="4" required></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button className="button is-danger" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
