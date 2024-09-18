import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    const {addItems} = useContext(CartContext)
    const [showItemCount, setShowItemCount] = useState(true)   


    const onAdd = (quantity) => {
        addItems(product, quantity)
        setShowItemCount(false)
    }
    return (    
            <div className='card2' key={product.id}>
                <div className='card-detail'>
                    <img src={product.imagen} alt={product.titulo}/>
                    <h2 className='stock'>$ {product.precio}</h2>
                    <p className='card-title'>{product.titulo}</p>
                    <p className='stock'>Stock: {product.stock}</p>
                    <p className='descripcion'>{product.descripcion}</p>
                    {product.stock === 0 ? (
                        <p className='outStock'>Out of Stock</p>
                    ) : showItemCount ? (
                        <ItemCount className='boton' initial={1} stock={product.stock} onAdd={onAdd}/>)
                        : 
                        <Link className='link-compra' to={"/Cart"}>Terminar Compra</Link>}
                        
                            
                </div>
            </div>
        
    )
}
export default ItemDetail