import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const techBadges = project.technologies.map((technology, i) => (
        <span 
            key={i} 
            className="tag mr-2"
            style={{ backgroundColor: '#a2db87', color: '#ffffff' }}
        >
            {technology}
        </span>
    ));

    return (
        <div
            className="card project-card"
            style={{
                maxWidth: '600px',
                margin: '20px auto',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                
            }}
        >
            
            <div className="card-image">
                <figure className="image is-1by1">
                    <img
                        src={`/images/${project.images[0].url}`}
                        alt={project.images[0].caption || project.title}
                        style={{
                            objectFit: 'cover',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                        }}
                    />
                </figure>
            </div>

            
            <div className="card-content" style={{ padding: '20px' }}>
                <div className="media">
                    <div className="media-content">
                        <h2 className="title is-4" style={{ marginBottom: '10px', color: '#333', fontWeight: '500'}}>
                            {project.title}
                        </h2>
                        <p className="subtitle is-5" style={{ marginBottom: '15px', color: '#777' }}>
                            {project.description}
                        </p>
                    </div>
                </div>

                
                <div className="tags mt-4">{techBadges}</div>
            </div>

            
            <div
                className="card-footer"
                style={{
                    borderTop: '1px solid #f0f0f0',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Link
                    to={`/projects/${project.slug}`}
                    className="card-footer-item button is-danger is-light is-outlined"
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        
                        
                    }}
                >
                    View Project
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
