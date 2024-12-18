import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
import "../../css/index.css";

const Show = () => {
    const [projectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const found = projectsList.find((project) => project.slug === slug);
        setProject(found || undefined);
    }, [slug, projectsList]);

    if (project === null) return <h2 className="loading">Loading...</h2>;
    if (project === undefined) return <Navigate to="/projects" />;

    return (
        <div className="show-page" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="project-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#333' }}>{project.title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px' }}>
                    {project.description}
                </p>
            </div>

            <div className="project-technologies" style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#444' }}>Technologies Used</h2>
                <div
                    className="technologies-list"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginTop: '10px',
                    }}
                >
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            style={{
                                backgroundColor: '#a2db87',
                                color: '#fff',
                                borderRadius: '15px',
                                padding: '5px 15px',
                                fontSize: '0.9rem',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* miro embed */}
            <div className="miroboard-container" style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#444', marginBottom: '15px' }}>
                    Project Planning Board
                </h2>
                <iframe
                    src={project.miro}
                    width="100%"
                    height="600"
                    title="Miro Board"
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                ></iframe>
            </div>

            {project.links && project.links.length > 0 && (
                <div className="project-links" style={{ marginTop: '40px' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#444', marginBottom: '20px' }}>
                        Link to the Website! ദ്ദി（• ˕ •マ.ᐟ
                    </h2>
                    <div
                        className="links-list"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#1a202c',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    backgroundColor: '#a2db87',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    display: 'block',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Photo Gallery Section */}
            {project.images && project.images.length > 0 && (
                <div className="photo-gallery" style={{ marginTop: '40px' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#444', marginBottom: '20px' }}>
                        Gallery!
                    </h2>
                    <div
                        className="gallery"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'center',
                        }}
                    >
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                style={{
                                    width: 'calc(33.33% - 10px)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                }}
                            >
                                <img
                                    src={`/images/${image.url}`}
                                    alt={`Project Image ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            
          

            {/* button back to projects */}
            <div style={{ textAlign: 'center' }}>
                <a
                    href="/projects"
                    className="button is-danger is-outlined"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '1rem',
                    }}
                >
                    Back to Projects
                </a>
            </div>
        </div>
    );
};

export default Show;
