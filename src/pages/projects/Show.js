import { useParams } from "react-router-dom";

const Show = () => {
     
    let {id}  = useParams();

    return (
        <h1>Hello from projects / Show page, you are looking at projects with the id: {id} </h1>
    );
};

export default Show;