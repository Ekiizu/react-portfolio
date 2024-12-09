import { Link } from 'react-router-dom';


//changed to suit bulma
const ProjectCard = ({ project }) => {
  return (
    <div className="card">
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
          {project.description}
          <br />
          <div className="tags">
            {project.technologies.map((technology, i) => (
              <span key={i} className="tag is-info">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/projects/${project.slug}`} className="card-footer-item">
          View
        </Link>
      </footer>
    </div>
  );
};

export default ProjectCard;
