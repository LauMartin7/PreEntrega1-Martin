import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from'../CartItem/CartItem';


const Cart = ()=> {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div className='card-footer'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='card-footer-item'>Productos</Link>
            </div>
        )
    }


    return(
        <div className='card-footer'> 
            
            { cart.map((prod) => <CartItem key={prod.id} prod={prod} {...cart}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="button is-primary">Limpiar Carrito</button>
            <Link to='/checkout' className='card-footer-item'>Checkout</Link>
        </div>
    )

}


export default Cart