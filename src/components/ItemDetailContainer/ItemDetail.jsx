import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ( { detalle }) => {
    console.log("Aca estan los productos en ItemDetail", detalle)

if (detalle === undefined){

return(
<>
<h1>Cargando</h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="loading" srcset="" />
</>

)
}else{
    return (
        <div className="contenedor-general">

             <h1> Detalle del producto </h1>
            <div className="contenedor-detalle">
                  <img src={detalle[0].img} alt={detalle[0].name} className="img-detalle" />
                    <div className="contenedor-desc">
                          <h2 className="titulo">{detalle[0].name}</h2>
                         <p className="desc">{detalle[0].description}</p>
                    <div>
                        <div className="contenedor-precio">
                            <div className="precio">
                                  <p className="color-precio">{detalle[0].precio}</p>
                            </div>

                            <button className="button-volver">Lista de Productos</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}}

export default ItemDetail
