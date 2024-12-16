import categoriesList from '../../data/projects.json';

const FilterProjects = ({ setSearchTerm, setSelectedCategory }) => {

    let categoryOptions = categoriesList.map((category, index) => {
        return <option key={index} value={category.value}>{category.label}</option>
    });

    return (
        <>
            <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                <option value={"All"}>All</option>
                <option value={"Game Development"}>Game Development</option>
                <option value={"Front-End Development"}>Front-End</option>
                <option value={"Back-End Development"}>Back-End</option>
                <option value={"Full-Stack"}>Full-Stack</option>
                <option value={"Design"}>Design</option>
                {categoryOptions}
            </select>
        </>
    );
};

export default FilterProjects;