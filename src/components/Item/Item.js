import './Item.css'
import {Link} from "react-router-dom";

const Item = ({prod}) => {

    return(
        <div className='card column is-3'>
            <header className='card-header'>
                <h2 className='card-header-title'>
                    {prod.name}
                </h2>
            </header>
            <div className='card-image'> 
                <figure className='image is-4by3'>
                    <img src={prod.img} alt={prod.name} className='ItemImg'/>
                </figure>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <p className='info'>
                        Precio: ${prod.price}
                    </p>
                    <p className='info'>
                        Stock disponible: {prod.stock}
                    </p>
                </div>
            </div>
            <footer className='card-footer'>
                <Link to={`/item/${prod.id}`} className='card-footer-item'>Ver detalles</Link>
            </footer>
        </div>
    )
}

export default Item