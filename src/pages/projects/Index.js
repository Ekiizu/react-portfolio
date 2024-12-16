import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ui/ProjectCard';
import projectsJSON from '../../data/projects.json';
import FilterProjects from '../../components/ui/FilterProjects';
import "../../css/index.css";

const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState(projectsJSON);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredList(projectsList);
        } else if (searchTerm.length > 1) {
            const result = projectsList.filter((project) =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredList(result);
        }
    }, [searchTerm]);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredList(projectsList);
        } else {
            const result = projectsList.filter((project) =>
                project.categories.includes(selectedCategory)
            );
            setFilteredList(result);
        }
    }, [selectedCategory]);

    const projectCards = filteredList.map((project, index) => (
        <div key={index} className="column is-half">
            <ProjectCard project={project} />
        </div>
    ));

    return (
        <div className="container">
            
            <div className="section transparent-section">
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input
                            className="input search-bar"
                            type="text"
                            placeholder="Search projects"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="control">
                        <div className="select">
                            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="section">
                <div className="columns is-multiline">{projectCards}</div>
            </div>
        </div>
    );
};

export default Index;
