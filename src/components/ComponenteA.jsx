import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ComponenteA = () => {

    const {cart, setCart, comision,longitud} = useContext(CartContext)
    return (
        <div>
            <h1>
                {comision}
            </h1>
            <p>
                {cart}
            </p>
            <p>
                {longitud}
            </p>
            <button onClick={()=> setCart("nuevo valor")}>
                cambiar valor
            </button>
        </div>
    )
}

export default ComponenteA