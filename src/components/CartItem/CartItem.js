import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = (item, quantityAdded) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <span className='columns'>
            <div className='column is-2'>
                <h1 className='title is-5'>{item.name}</h1>
            </div>
            <div className='column is-2'>
                <p>Cantidad:{quantityAdded}</p>
            </div>
            <div className='column is-2'>
                <p>Precio X unidad: ${item.price}</p>
            </div>
            <div className='column is-2'>
                <p>Subtotal: ${quantityAdded*item.price}</p>
            </div>
            <div className='column is-2'>
                <button onclick={() => removeItem()}>X</button>
            </div>
        </span>
    )
}

export default CartItem