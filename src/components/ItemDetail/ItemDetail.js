import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    return(
        <div className='card columns'>
            <div className='column is-3 is-offset-5'>
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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail