import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    let cantidadTotal = totalQuantity()
    
    return(
        <Link to="/cart" style={{ display: cantidadTotal > 0 ? 'block' : 'none'}}>
            <div className="imgCarrito">
                <img src={cart} alt="cart-widget" width="35px"/>
                <div className="numeroCarrito">
                    <p>{cantidadTotal}</p>
                </div>
            </div>
        </Link>
    );
}

export default CartWidget