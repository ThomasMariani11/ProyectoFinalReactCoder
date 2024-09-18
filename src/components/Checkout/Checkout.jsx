import { useState,useContext } from "react"
import { CartContext } from "../context/CartProvider"
import { getFirestore, collection, getDoc, addDoc, updateDoc, doc } from "firebase/firestore"
import './Checkout.css'


const Checkout = () => {
  const {cart, getTotal, clearCart } = useContext(CartContext)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    
    if(!nombre || !apellido || !celular || !email || !emailConfirm){
      setError('porfavor completa todos los campos')
      return
    }
    if( email !== emailConfirm){
      setError('los email no coinciden')
      return
    }
    const db = getFirestore()
  
    const order = {
      items: cart.map((product) => ({
          id: product.product.id,
          name: product.product.titulo,
          quantity: product.quantity,
          stock: product.product.stock,
        
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      celular,
      email
    }
    Promise.all(
      order.items.map(async(productOrder) =>{
        const productRef = doc(db, "producto", productOrder.id)
        const productDoc = await getDoc(productRef)
        const stock = productDoc.data().stock

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity
        })
      })
    ).then(() => {
      addDoc(collection(db,'orders'),order).then((docRef) =>{
        setOrderId(docRef.id)
        clearCart()
      }).catch((error) => {
        console.log('error añadiendo doc', error)
        setError('error al cargar objeto')
      })
    })
    .catch((error) => {
      console.log('error updating',error)
      setError('no se puede actualizar el stock')
    })
  }

  return ( 
    <div>
      <h2 className="titulo">PRODUCTOS</h2>
        {cart.map((products) =>(
          <div className="card2" key={products.product.id}>

            <div className="card-detail">
              <img src={products.product.imagen} alt="" />
              <p className="card-title">{''}{products.product.titulo}</p>
              <p className="total">x{products.quantity}</p>
              <p className="total">${products.product.precio}</p>
              
            </div>
          </div>
        ))}
        <h2 className="titulo">INGRESE SUS DATOS</h2>
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Apellido</label>
            <input type="text" onChange={(e) => setApellido(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Celular</label>
            <input type="number" onChange={(e) => setCelular(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Confirmar Email</label>
            <input type="email" onChange={(e) => setEmailConfirm(e.target.value)}/>
          </div>
          <button className="boton-compra" type="submit">Confirmar Compra</button>


          {error && <p>{error}</p>}
          {orderId && (
            <p>¡Gracias por tu compra! Tu numero de compra es: {orderId}</p>
          )}
        </form>
    </div>
  )
}

export default Checkout