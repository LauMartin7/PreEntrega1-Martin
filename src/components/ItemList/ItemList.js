import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return(
        <div className='columns is-vcentered is-centered'> 
            {products.map( (prod) => <Item key={prod.id} prod={prod} {...products}/>)}
        </div>
    )
}

export default ItemList