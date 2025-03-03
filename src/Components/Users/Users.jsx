import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
    

        <div>
            <h2>This is users componets</h2>
            <h3>Total Users: {users.length}</h3>
            <p>They are our satisfied clients</p>
            <div className="users">
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;