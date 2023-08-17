import "./styles.css";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-container">
            <ul className="nav-ul">
            <Link className="li" to="/">Home</Link>
            <Link className="li" to="about">About</Link>
            <Link className="li" to="contact">Contact</Link>
            <Link className="li" to="/category/zapatillas">Zapatillas</Link>
            <Link className="li" to="/category/remeras">Remeras</Link>
            </ul>

            <CartWidget />
        </nav>
        
    );
};

export default Navbar;