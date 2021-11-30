import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'

const getItems = () => {
    return new Promise((resolve, reject) => {
        const object = [
            {
                id:"1",
                name:"Hamburguesa con queso",
                description:"Hamburguesa completa con doble carne, lechuga, cebolla, queso cheddar y gurmet",
                img:"https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-455/adobe-burger-1-a.jpg",
                precio:" $ 950 ",
            },   
            {
                id:"2",
                name:"Empanada de carne",
                img:"https://comidasparaguayas.com/wp-content/uploads/2019/11/empanada-de-carne-paraguaya_700x465.jpg",
                precio:" $ 86",
            },
            {
                id:"3",
                name:"Muzzarela",
                img:"https://saboresmendoza.com/wp-content/uploads/2019/09/pizza-de-muzzarella.jpg",
                precio:" $ 1050",
            }
        ]
        setTimeout(() => resolve(object), 3000)
    })
}


const ItemDetailContainer = () => {

   
    const [productosdetalles, setProductosdetalles] = React.useState([])
  


    useEffect(() => {
        const list = getItems()
        list.then(response => {
            setProductosdetalles(response)
        })

        return (() => {
            setProductosdetalles([])
            
        })
        
    }, [])
     const detalle = productosdetalles[0]

    
        // console.log("Producto particular", detalle)

    // console.log("Detalles del producto", products[0])


    return (
        <div>
            <ItemDetail detalle={detalle} />
        </div>
    )
}

export default ItemDetailContainer

