import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h3>Details about user: {name}</h3>
        </div>
    );
};

export default ShowDetails;