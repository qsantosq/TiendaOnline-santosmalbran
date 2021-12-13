import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ({ productos = []} ) => {
    return (

            <header className="contenedor-header">

                <div className="contenedor-logo">
                <img src={require("../../assest/logo.png").default} className="logo" />
                </div>

                <div className="contenedor-incio">
                   <Link to={"/"} className="botones-menu">Inicio</Link>
                </div>

                <div className="contenedor-navbar">
                    <nav>
                        <ul className="contenedor-ul">
                            <Link to={`/Hamburguesas/${productos.id}`}>Hamburguesas</Link>
                            <Link to={'/category/Empanadas'}>Empanadas</Link>
                            <Link to={'/category/Pizza'}>Pizza</Link>
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


// to={`/${product.category}`}

