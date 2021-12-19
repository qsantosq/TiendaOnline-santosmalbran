import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../products';


    const ItemListContainer = () => {
       

    const [productos, setProductos] = React.useState([])
    const {categoriaId} = useParams();
    console.log(categoriaId);

    useEffect(() => {        
        getProducts(categoriaId).then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })
        return (() => {
            setProductos([])
        })
    }, [categoriaId])
 
    return (

        <div>
            <h1>Tienda Santos-Malbran </h1>
          
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer


