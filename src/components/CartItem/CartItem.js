import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import React from 'react'

const CartItem = ({prod}) =>{

    //item, quantityAdded
    //{title, price , id , quantity} el companiero y asi lo cambio el profe,
    //sino sacar la imagen que al final la saco
    const {removeItem} = useContext(CartContext)

    return(
        <span className='columns'>
            <picture className='image is-4by3'>
                    <img src={prod.img} alt={prod.name} className='ItemImg'/>
            </picture>
            <div className='column is-2'>
                <h2 className='title is-5'>{prod.name}</h2>
                <p>Cantidad:{prod.quantity}</p>
                <p>Subtotal: ${prod.quantity * prod.price}</p>
                <button onclick={() => removeItem(prod.id)}>Eliminar</button> 
            </div>
        </span>
    )
}

export default CartItem