import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, imgB, oferta }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect( () => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    } ,[categoryId])

    return (
        <div className="contenedor">
            <div className="mensaje columns is-vcentered">
                <div className="column animation is-3 notification is-primary is-light is-offset-3">
                    <h1 className="subtitle is-3">{greeting}</h1>
                    <h1 className="oferta subtitle is-3">{oferta}</h1>
                </div>
                <figure className="column image is-4 is-by1">
                    <img className="is-rounded" src={imgB} alt="logo"/>
                </figure>
            </div>
            <div className="productosTodos">
                <ItemList products={products}/>
            </div>
        </div>
    );
}

export default ItemListContainer