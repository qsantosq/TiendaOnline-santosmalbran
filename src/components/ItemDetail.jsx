import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ( { detalle }) => {
    console.log("Aca estan los productos en ItemDetail", detalle)
    return (
        <div className="contenedor-general">
             {/* <h1> Detalle del producto </h1>
            <div className="contenedor-detalle">
                  <img src={detalle.img} alt={detalle.name} className="img-detalle" />
                    <div className="contenedor-desc">
                          <h2 className="titulo">{detalle.name}</h2>
                         <p className="desc">{detalle.description}</p>
                    <div>
                        <div className="contenedor-precio">
                            <div className="precio">
                                  <p className="color-precio">{detalle.precio}</p>
                            </div>

                            <button className="button-volver">Lista de Productos</button>
                        </div>

                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default ItemDetail
