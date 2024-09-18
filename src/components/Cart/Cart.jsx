import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import CartDetail from '../CartDetail/CartDetail'

const Cart = () => {
    const {cart, getTotal, getTotalProducts, removeItem, clearCart, buy} = useContext(CartContext)

    return (
        <div>
            {cart.length === 0 ? (<h1>no hay productos en el carrito</h1>) : (
            <>
                <CartDetail cart={cart}/>
            </>
        )}
        </div>
    )
}

export default Cart