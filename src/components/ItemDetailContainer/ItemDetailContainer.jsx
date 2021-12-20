import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { getProductById } from '../../products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productos, setProductos] = React.useState([]);
    const { paramId } = useParams();
   

    useEffect(() => {
        getProductById(paramId).then(product => {
            setProductos(product);
            console.log(paramId)
        });
        return(() => {
            setProductos([]);
        });
    }, [paramId]);

    return(
        <div className="itemDetailContainer">
        <ItemDetail productos={productos}/>
      
        </div>
    );
}



 export default ItemDetailContainer

