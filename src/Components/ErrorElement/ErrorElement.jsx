import { useNavigate, useRouteError } from "react-router-dom";


const ErrorElement = () => {
    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>Not Found</p>
            <p>Go back where you from</p>
            <button onClick={handleHome}>Home</button>
        </div>
    );
};

export default ErrorElement;