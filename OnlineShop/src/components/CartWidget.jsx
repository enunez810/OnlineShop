import  cartIcon from "../assets/cart.svg"
import "./CartWidget.css"


const CartWidget = () => {

    return (
        <div id="carrito" className="divs-menu">
            <img src={cartIcon} className="search-icon" />
            <span class="badge bg-light cant-item">3</span>
            <p>Carrito</p>
        </div>

    )
}

export default CartWidget; 