import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import React from 'react'
import './CartItem.css';

const CartItem = ({name, quantity, price, id, img}) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <div className="columns cartColumns">
            <div className="column"></div>
            <div className="headerCart column is-3">
                <h4 className='tituloCart'>{name}</h4>
                <figure className='image is-128x128'>
                    <img src={img} alt={name}/>
                </figure>
            </div>
            <div className="informacion column is-2">
                <p>Cantidad:{quantity}</p>
                <p>Precio X unidad: ${price} </p>
                <p>Subtotal: ${quantity * price}</p>
            </div>
            <div className="column"></div>
            <div className="column is-3">
                <button className='botonEliminar' onClick={() => removeItem(id)}>Eliminar</button> 
            </div>
        </div>
    )
}

export default CartItem