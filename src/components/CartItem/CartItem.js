import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import React from 'react'

const CartItem = ({name, quantity, price, id}) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <div className="text-white flex justify-around">
            <h4 className='title is-5'>{name}</h4>
            <p>Cantidad:{quantity}</p>
            <p>Precio X unidad: ${price}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onclick={() => removeItem(id)}>Eliminar</button> 
        </div>
    )
}

export default CartItem