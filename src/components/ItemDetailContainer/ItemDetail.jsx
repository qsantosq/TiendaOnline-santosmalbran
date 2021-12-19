import React from 'react'
import ItemCard from './ItemCard'


const ItemDetail = ( { productos }) => {
    console.log("Aca este es el producto en ItemDetail", productos)

    if (productos === undefined){

        return(
        <>
        <h1>Cargando</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="loading" srcset="" />
        </>
        
        )
        }else{

            return(
                <div className="contenedor-caja">
                    <ItemCard key={productos.paramId} productos={productos} />
                </div>
            );
        }}


    

    export default ItemDetail

   