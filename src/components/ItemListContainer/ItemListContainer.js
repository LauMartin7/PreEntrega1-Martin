import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../config/firebase";


const ItemListContainer = ({ greeting, imgB, oferta }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect( () => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'Babyland'), where('category', '==', categoryId))
            : collection(db, 'Babyland')

        console.log(collectionRef)
        getDocs(collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    } ,[categoryId])

    return (
        <div className="contenedor">
            <div className="mensaje columns is-vcentered">
                <div className="column animation is-4 notification is-primary is-light is-offset-3">
                    <h1 className="subtitle is-3">{greeting}</h1>
                    <h1 className="oferta subtitle is-3">{oferta}</h1>
                </div>
                <figure className="column image is-2">
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