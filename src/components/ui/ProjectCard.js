import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    
    let techBadges = project.technologies.map((technology, i) => (
        <span key={i} className="tag is-danger is-light mr-2"> 
        {/* Button Colours */}
            {technology}
        </span>
    ));

    return (
        <div className="card" style={{ maxWidth: "600px", margin: "20px auto" }}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={`/images/${project.images[0].url}`}
                        alt={project.images[0].caption}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{project.title}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{project.description}</p>
                    <div className="tags mt-2">
                        {techBadges}
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <Link to={`/projects/${project.slug}`} className="card-footer-item button is-danger is-light">
                    View Project
                </Link>
            </footer>
        </div>
    );
};

export default ProjectCard;
