import React from 'react'
import { useState, useEffect } from "react"
import  ItemDetail  from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()

        const newDoc = doc(db, 'producto', id)

        getDoc(newDoc).then(res => {
            const data = res.data()
            const newProduct = {id: res.id, ...data}
            setProduct(newProduct)
        })

    },[])
    return (
        <div>
            {product == undefined ? <Spinner/> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer