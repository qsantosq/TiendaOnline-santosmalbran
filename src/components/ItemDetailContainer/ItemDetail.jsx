import React from 'react'
import ItemCard from './ItemCard'
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react';
import {Link} from 'react-router-dom';



const ItemDetail = ( { productos }) => {
    console.log("Aca este es el producto en ItemDetail", productos)
    const [boton, setBoton] = useState(true)
    
    if (productos === undefined){

        return(
        <>
        <h1>Cargando</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="loading" srcset="" />
        </>
        
        )
        }else{

                 
                  const Count = ItemCount;
                  const onAdd = (Count) =>{
                     alert("Se agregaron la cantidad de " + Count)
                     console.log("Se agregaron la cantidad de " + Count)
                     setBoton(false);
                    }  
            
            return(
                <div className="contenedor-caja">

                    <ItemCard key={productos.paramId} productos={productos} />

                     {boton ? 
                        (<Count onConfirm={onAdd} maxQuantity={productos?.stock}/>) 
                        :
                        (<Link to={"/cart"} >Ir al carrito</Link>)
                     }    

                </div>
            );
        }}


    

    export default ItemDetail

   