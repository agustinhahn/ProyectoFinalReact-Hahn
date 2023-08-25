import React from 'react'
import TableCart from './TableCart'
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ButtonGoShop from './ButtonGoShop';
import { Link } from 'react-router-dom';
import Form from './Form';

const Cart = () => {

    const {cart, setCart} = useContext(ContextCart)
    const {botonCompra, setBotonCompra} = useContext(ContextCart)

    if(botonCompra == false){
        if(cart.length>0){
            return (
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                    <Link to={'../category/:todos'}>
                        <ButtonGoShop />
                    </Link>
                    <h1 style={{marginTop:'50px'}}>CARRITO</h1>
                    <TableCart />
                </div>
            )
        }
        else{
            return (
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'50px', margin:'50px'}}>
                    <h1 className='animated fadeInUp titulo-page'>NO HAY PRODUCTOS EN EL CARRITO</h1>
                    <Link to={'../category/:todos'}>
                        <ButtonGoShop />
                    </Link>
                </div>
            )
        }
    }
    else{
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'50px', margin:'50px'}}>
                <Form />
            </div>)
    }
}

export default Cart