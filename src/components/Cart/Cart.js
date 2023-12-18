import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from'../CartItem/CartItem';
import './Cart.css';

const Cart = ()=> {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if(totalQuantity() === 0){
        return(
            <div className='alinearCart'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='card-footer-item'>Productos</Link>
            </div>
        )
    } 

    const totalCart = total()

    return(
        <div className='column is-12'> 
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            <div className='alinearCart'>
                <p>Total: ${totalCart}</p>
                <button className="botonLimpiar" onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>
            <Link to='/checkout' className='botonCheckout card-footer-item'>Checkout</Link>
        </div>
    )

}


export default Cart