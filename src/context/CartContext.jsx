import {createContext, useState} from 'react'

export const ContextCart = createContext(null)


export const CartContext = ({children}) =>{

const [cart,setCart] = useState([])
const [contador, setContador] = useState(0)
const [botonCompra, setBotonCompra] = useState(false)

    return (

        <ContextCart.Provider value={{cart,setCart,contador, setContador, botonCompra, setBotonCompra}}>
            {children}
        </ContextCart.Provider>

    )
}

export default CartContext