import React, {createContext, useState} from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    //funcionalidades del carrito
    const [cart, setCart] = useState([])

    //agregar al carrito
    const addItems = (product, quantity) => {
        if(isInCart(product.id)){
            setCart(
                cart.map((item) => item.product.id === product.id 
                ? {...item,quantity: item.quantity + quantity} : item) 
            )
        }else{
            setCart([...cart, {product, quantity}])
        }
    }

    //ver si esta en el carrito
    const isInCart = (productId) => {
        return cart.some((item) => item.product.id === productId)
    }

    //limpia carrito
    const clearCart = () => {
        setCart([])
    }

    //total carrito
    const getTotal = () =>{
        return cart.reduce((total, item) => total + item.product.precio * item.quantity, 0)
    }

    //total productos en el carrito
    const getTotalProducts = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
    
    //eliminar producto del carrito
    const removeItem = (productId) =>{
        setCart(cart.filter((item) => item.product.id !== productId))
    }

    return(
        <CartContext.Provider value={{cart, addItems, isInCart, clearCart, getTotal, getTotalProducts, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider