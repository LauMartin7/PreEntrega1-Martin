import cart from './assets/cart.svg';
import "./CartWidget.css";

const CartWidget = () => {
    return(
        <div className="imgCarrito">
        <img src={cart} alt="cart-widget" width="30px" className="carrito"/>
        <span className="numeroCarrito">0</span>
        </div>
    );
}

export default CartWidget