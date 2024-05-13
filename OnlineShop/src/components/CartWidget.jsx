import  cartIcon from "../assets/cart.svg"
import "./CartWidget.css"


const CartWidget = () => {

    return (
        <div id="carrito" className="divs-menu">
            <img src={cartIcon} className="search-icon" />
            <span id="cant-items">2</span>
            <p>Carrito</p>
        </div>

    )
}

export default CartWidget; 