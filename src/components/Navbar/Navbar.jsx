import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"

const Navbar = () => {
    return (

            <header className="contenedor-header">

                <div className="contenedor-logo">
                <img src={require("../../assest/logo.png").default} className="logo" />
                </div>

                <div className="contenedor-incio">
                   <button className="botones-menu">Inicio</button>
                </div>

                <div className="contenedor-navbar">
                    <nav>
                        <ul className="contenedor-ul">
                            <li><a href="#" className="estilos-a">Hamburguesas</a></li>
                            <li><a href="#" className="estilos-a">Empanadas</a></li>
                            <li><a href="#" className="estilos-a">Pizza</a></li>
                        </ul>
                    </nav>
                </div>
                
                <CartWidget />
                <div>
                    <button className="botones-menu">Login</button>
                </div>

            </header>
    )
}

export default Navbar