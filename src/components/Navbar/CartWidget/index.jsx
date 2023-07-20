import "./styles.css";
import Cart from "../../../assets/icons/cart.png"

function CartWidget() {
    return(
        <div className="cart.widget">
            <img src={Cart} alt="cart" className="icono-carrito"/>
            <p>1</p>
        </div>
    );
}

export default CartWidget;