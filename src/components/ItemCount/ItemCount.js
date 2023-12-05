import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='counter card-footer-item'>
            <div className='controls'>
                <button className='button signo is-primary is-light' onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className='button signo is-primary is-light' onClick={increment}>+</button>
            </div>
            <div>
                <button className='button agregar is-primary is-light' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;