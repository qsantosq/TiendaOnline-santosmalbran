import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react'
import { getItemByCategory } from '../../products';
import { getProducts } from '../../products';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos, setProductos] = React.useState([]); 
    const { categoriaId } = useParams();

    useEffect(() => {


        ( async () => {
            if(categoriaId !== undefined){
                const categoria = await getItemByCategory(categoriaId);
                setProductos(categoria);
            } else {
                const categoria = await getProducts();
                setProductos(categoria);
            }
        })();
    }, [categoriaId]);


    return (

        <div>
            <h1>Tienda Santos-Malbran </h1>
          
            <ItemList productos={productos}/>
         
        </div>
    )
}

export default ItemListContainer
