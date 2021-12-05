import React from 'react'
import "./item.css"

const Item = ({ product }) => {

    
    return (
        <div className="card">
            <div className="contenedor-items">

                <div className="contenedor-tituloItems">
                    <h2> {product.name} </h2>
                </div>

                <div className="contenedor-imagen"> 
                    <img src={product.img} alt={product.name} className="img-prod" /> 
                </div>

                <div className="contenedor-precio"> 
                    <p>{product.precio}</p>
                </div>
                <button>
                    Pedir
                </button>

            </div>
        </div>

    )
}

export default Item
