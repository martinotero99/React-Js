import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDocs, doc } from `firebase/firestore`
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([null])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
        .then(Response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch (error => {
            console.error(error)
        })
        .finally(()=> {
            setLoading(false)
        })
    },[itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer