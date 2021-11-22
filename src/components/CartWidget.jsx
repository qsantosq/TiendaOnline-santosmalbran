import React from 'react'
import "./CartWidget.css"
const CartWidget = () => {
    return (
        <div className="container-CartWidget">
            <i className="fas fa-shopping-cart cart"></i>
            <p className="contador">0</p>
        </div>
    )
}

export default CartWidget
