import React from 'react'
import { useState } from 'react'
const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    return (
        <div>
            <div className='botones'>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={increment}>Incrementar</button>
            </div>

            <p className='stock'>Cantidad: {count}</p>
            <button onClick={() => onAdd(count)} className='boton carrito'>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount