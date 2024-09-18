import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Nabvar = () => {
return (
    <nav className="navbar">
        <div>
            <Link to="/" className="navbar-logo">
                <h1>Street Style</h1>
            </Link>
        </div>
        <div className="navbar-links">
            <ul>
                <li><NavLink to="/">INICIO</NavLink></li>

                <li><NavLink to="/category/Remeras" className={({isActive}) => (isActive ? 'link active' : 'link')}>REMERAS</NavLink></li>

                <li><NavLink to="/category/Pantalones" className={({isActive}) => (isActive ? 'link active' : 'link')}>PANTALONES</NavLink></li>

                <li><NavLink to="/category/Zapatillas" className={({isActive}) => (isActive ? 'link active' : 'link')}>ZAPATILLAS</NavLink></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default Nabvar