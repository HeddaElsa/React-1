import "./Navbar.css";
import {Link} from 'react-router-dom';


function Navbar() {
return(
    <div className="app__outer">
        <nav className="nav">
            <div className="nav__logo">
                <Link to="/">Hedda Nordstedt</Link>
            </div>
            <ul className="nav__list">
                <li>
                    <Link to="/portfolio">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </div>
)

}

export default Navbar;