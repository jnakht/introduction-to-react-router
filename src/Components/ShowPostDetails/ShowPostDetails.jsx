import { useLoaderData } from "react-router-dom";


const ShowPostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const showPostDetalisCss = {
        border: '2px solid aquamarine',
        padding: '20px',
    }
    return (
        <div style={showPostDetalisCss}>
            <h3>Id: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default ShowPostDetails;