import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
    // static list of projects
    const projects = [
        { id: 1, name: "Project One", description: "Description of Project One" },
        { id: 2, name: "Project Two", description: "Description of Project Two" },
        { id: 3, name: "Project Three", description: "Description of Project Three" },
        //BROKEN
    ];

    // Filter the list if needed 
    const filteredList = projects.filter((project) => project.name.toLowerCase().includes("project"));

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
