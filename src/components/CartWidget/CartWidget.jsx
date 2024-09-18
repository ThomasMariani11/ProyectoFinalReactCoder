import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext)
return (
    <div>
        <Link className='link' to={"cart"}>
            <FaShoppingCart/>
            {getTotalProducts() === 0 ? null : getTotalProducts()}
        </Link>
    </div>
    )
}

export default CartWidget