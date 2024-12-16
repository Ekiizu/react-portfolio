import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
import "../../css/index.css";

const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const found = projectsList.find((project) => {
            return project.slug === slug;
        });

        setProject(found);

    }, [slug, projectsList]);

    if (project === null) return <h2 className="loading">Loading...</h2>;

    if (project === undefined) return <Navigate to={`/projects`} />;

    return (
        <div className="show-page">
            <div className="project-details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p className="technologies">
                    Technologies Used:
                </p>

                <div className="technologies-list">
                    {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                {/* wanted to add the embed for our miroboard */}
                <div className="miroboard-container">
                <iframe
                    src={project.miro} 
                    width="100%" 
                    height="600" 
                    
                    title="Miro Board"
                    style={{ border: 'none', overflow: 'hidden' }}
                ></iframe>
                 </div>
        
                
            </div>
        </div>
    );
};

export default Show;
