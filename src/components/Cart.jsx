import React from 'react'
import { useContext } from 'react'
import { ContextCart } from '../context/CartContext'

const Cart = () => {
    const {cart, setCart} = useContext(ContextCart)
    return (
        <div>
            <h1>PROXIMAMENTE CARRITO</h1>
            <div style={{display:'flex', gap:'20px'}}>
                <p>en el carrito hay:</p>
                <p>{cart}</p>
            </div>
        </div>
    )
}

export default Cart