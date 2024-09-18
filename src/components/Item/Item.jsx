import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
            <Link to={`/item/${item.id}`} className='link'>
                <div className='card' key={item.id}>
                    <img src={item.imagen} alt={item.titulo}/>
                    <h2>$ {item.precio}</h2>
                    <p className='card-title'>{item.titulo}</p>
                    <p className='descripcion'>{item.descripcion}</p>
                </div>
            </Link>
        
    )
}
export default Item