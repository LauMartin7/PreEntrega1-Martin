import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addItem = (item , quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    const totalQuantity = () => {
        return cart.reduce((acumulador, prev)=> acumulador + prev.quantity, 0)
    }
    
    const total = () =>{
        return cart.reduce((prev, act)=> prev + act.quantity * act.price,0)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}