import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../config/firebase";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true)

        const docRef = itemId
        ? query(collection(db, 'Babyland'), where('id', '==', itemId))
        : collection(db, 'Babyland')

        getDocs(docRef)
            .then(response =>{
                //const data = response.data()
                const productAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                //{id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    } ,[itemId])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer