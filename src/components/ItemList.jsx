import React from 'react'
import Item from './Item.jsx'


const ItemList = ({products}) => {
    console.log("Aca estan los productos en ItemList", products)
    return ( 
       
        <ul>
            {products.map((product) => {
                return (
                    <Item key={product.id} product={product}/>
                )
            })}        
        </ul>
 
    )
}

export default ItemList
