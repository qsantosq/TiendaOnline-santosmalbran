import React from 'react';

const CartContext = React.createContext();

export const Provider = ({children}) => {

    const [carro, setCarro] = React.useState([]);
    const carrito = (id) => {
        return carro.some((productos) => productos.id === id);
    };

    const addItem = (productos, quantity) => {
        if (carrito (productos.id)){
            alert("se agrego al carrito")
        } else {
            setCarro([...carro, { ...productos, verCantidad: quantity}]);
        }
    };

    const remove = (id) => {
      const borrar = carro.filter((productos) => productos.id !== id)
      alert("se borro un producto del carrito")
      setCarro(borrar)
    }

    const clear = () => {
        alert("se limpio el carrito")
        setCarro([])
    }

    return (

        <CartContext.Provider value={{carro, addItem, remove, clear}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext;