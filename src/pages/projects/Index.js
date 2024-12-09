import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";

const Index = () => { //uh oh something broken

    const projectCards = filteredList.map((project, index) => {
        return <ProjectCard key={project.id} project={project} />;
    });

    return (
        <>
            <h1>All Projects</h1>
            {projectCards}
            <Link to={`/projects/1`}>Project ONE</Link>
        </>
    );
};

export default Index;
