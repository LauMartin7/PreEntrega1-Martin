import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id, name, price, img
        }

        addItem(item, quantity)

    }

    return(
        <div className=' itemDetail columns'>
            <div className='card column is-3 is-offset-5'>
                <header className='card-header'>
                    <h2 className='card-header-title'>
                        {name}
                    </h2>
                </header>
                <div className='card-image'> 
                    <figure className='image is-4by3'>
                        <img src={img} alt={name} className='ItemImg'/>
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='content'>
                        <p className='info'>
                            Categoría: {category}
                        </p>
                        <p className='info'>
                            Descripción: {description}
                        </p>
                        <p className='info'>
                            Precio: ${price}
                        </p>
                    </div>
                </div>
                <footer className='card-footer'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='card-footer-item'>Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail