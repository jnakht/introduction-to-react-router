
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h2>Navbar</h2>
            <ul className="">
                
                
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                
                
               
            </ul>
        </nav>
    );
};

export default Header;