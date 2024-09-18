import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'
import '../Item/Item.css'
import './CartDetail.css'
const CartDetail = ({cart}) => {

    const {getTotal, getTotalProducts, removeItem, clearCart} = useContext(CartContext)

    return (
        <div>
            <h2 className='titulo'>Carrito de Compras</h2>
            {cart.map((item) => (
                <div className='card1' key={item.product.id}>

                    <div className='card-detail'>
                        <p className='card-title'>{item.product.titulo}</p>
                        <img src={item.product.imagen} alt="" />
                        <p className='total'>Cantidad: {item.quantity}</p>
                        <p className='total'>Precio: ${item.product.precio}</p>
                        <button className='boton' onClick={() => removeItem(item.product.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <h3 className='total'>Total Productos: {getTotalProducts()}</h3>
            <h3 className='total'>Total a pagar: ${getTotal()}</h3>

            <div className='botones'>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button>
                    <Link to={"/checkout"} className='link'>Comprar</Link>
                </button>
            </div>
                

        </div>
    )
}

export default CartDetail