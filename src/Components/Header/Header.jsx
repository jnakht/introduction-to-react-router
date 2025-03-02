
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h2>Navbar</h2>
            <ul className="">
                
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
               
               
            </ul>
        </nav>
    );
};

export default Header;