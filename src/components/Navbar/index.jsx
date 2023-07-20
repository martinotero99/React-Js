import "./styles.css";
import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <nav className="navbar">
            <div>
             <button>Inicio</button>
             <button>Zapatillas</button>
            </div>

            <CartWidget />
        </nav>
    );
    
}

export default Navbar;