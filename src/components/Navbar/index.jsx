import "./styles.css";
import CartWidget from "../CartWidget/index";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-container">
            <ul className="nav-ul">
             <Link className="li" to="/">Home</Link>
             <Link className="li" to="about">About</Link>
             <Link className="li" to="contact">Contact</Link>
             <Link   Link className="li" to="/cart"></Link>
            <div className="Categories"> 
              <NavLink to={"/category/zapatilla"} className={({isActive}) => isActive? "ActiveOption" : "Option"}>zapatillas</NavLink>
              <NavLink to={"/category/remera"} className={({isActive}) => isActive? "ActiveOption" : "Option"}>Remeras</NavLink>
            </div>
            
            </ul>

            <CartWidget />
        </nav>
        
    );
};

export default Navbar;