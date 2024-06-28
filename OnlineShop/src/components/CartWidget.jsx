import  cartIcon from "../assets/cart.svg"
import { Link  } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import "./CartWidget.css"



const CartWidget = () => {

    const {cantItem} = useContext(CartContext);

    return (
        <div id="carrito" className="divs-menu">
            <Link to="/cart">
                <img src={cartIcon} className="search-icon" />
                <div className="badge bg-light cant-item">{ cantItem }</div>
                <p className="sin-sub" >Carrito</p>
            </Link>
        </div>
    )
}

export default CartWidget; 