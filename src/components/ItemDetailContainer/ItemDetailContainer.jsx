import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getProductById } from '../../products';



const ItemDetailContainer = () => {

    const [productos, setProductos] = React.useState([]);

    const paramID = useParams();
    console.log(paramID)
    useEffect(() => {
        getProductById(paramID).then(item => {
            setProductos(item);
        });
        return(() => {
            setProductos();
        });
    }, [paramID]);

    return (
        <div>
                <ItemDetail productos={productos}/>  
        </div>
    )
}

export default ItemDetailContainer
