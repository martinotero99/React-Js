import "./styles.css";
import Cart from "../../assets/icons/cart.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


function CartWidget() {
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block" : "none"}}>
            <img src={Cart} alt="cart" className="icono-carrito" />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget;