import { Link, Navigate, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postCss = {
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '15px',
    }
    
    const handleShowDetails = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div style={postCss}>
            <h4>Post of id: {id}</h4>
            <p><span style={{fontSize: '20px', fontWeight: '700px'}}>Title:</span> {title}</p>
            <p><small>{body}</small></p>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;