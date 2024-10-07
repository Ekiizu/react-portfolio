import { useLocation } from "react-router-dom";

const PageNotFound = () => {
    let location = useLocation();

    console.log(location)
    return (
        <h2>Sorry 404 Page { location.pathname } Not Found !</h2>
    );
};


export default PageNotFound;