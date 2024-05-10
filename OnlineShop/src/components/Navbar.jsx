import "./Navbar.css"
import searchIcon from "../assets/find.svg"

const Navbar = () => {

    return (
        <nav className="navbar-full">
            <div className="navbar-logo">
                <img src="../src/img/logotienda.png" className="img-logo" /> Mi Tienda
            </div>
            <div className="navbar-busc">
                <input type="text" className="search-input" />
            </div>
            <div className="navbar-menu">
                Menu | Perfil | Carrito 
            </div>
        </nav>
    )
}

export default Navbar;