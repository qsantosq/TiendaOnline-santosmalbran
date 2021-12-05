import React from 'react'
import "./ItemCount.css"


const ItemCount = (props) => {

    const [onAdd, setonAdd] = React.useState(1)


    const suma = () => {
        
        

        if( onAdd < props.stock){
            setonAdd(onAdd + 1)
        } else{
            setonAdd(5)
        }

    }


    const resta = () => {
        
        setonAdd(onAdd - 1 )

        if( onAdd > props.initial){
            setonAdd(onAdd - 1)
        } else{
            setonAdd(1)
        }

    }




    console.log(onAdd)


    return (

        <div className="contador">
            
            <div className="contenedor-contador">
                <button className="resta" onClick={() => resta()}>
                    -
                </button>

                <div className="stock">
                    <p> {onAdd} </p>
                </div>

                <button className="suma" onClick={() => suma()}>
                    +
                </button>
            </div>

            <button class="agregar-carrito">
                Agregar a carrito
            </button>

        </div>
    )
}

export default ItemCount
