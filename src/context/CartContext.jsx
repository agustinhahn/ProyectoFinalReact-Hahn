import {createContext, useState} from 'react'

export const ContextCart = createContext(null)


export const CartContext = ({children}) =>{

const [cart,setCart] = useState(0)

    return (

        <ContextCart.Provider value={{cart,setCart}}>
            {children}
        </ContextCart.Provider>

    )
}

export default CartContext