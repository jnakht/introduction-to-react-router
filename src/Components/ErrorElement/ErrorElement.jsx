import { useNavigate, useRouteError } from "react-router-dom";


const ErrorElement = () => {
    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    console.log(error.statusText || error.message);
    return (
        <div>
            <h1>Oops!!!</h1>
            {
                error.status === 404 && <div>
                    <p>Not Found</p>
                    <p>Go back where you from</p>
                    <button onClick={handleHome}>Home</button>
                </div>
            }
        </div>
    );
};

export default ErrorElement;