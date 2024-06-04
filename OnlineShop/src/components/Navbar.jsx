import "./Navbar.css"
import  searchIcon from "../assets/find.svg"
import  profileIcon from "../assets/user-profile.svg"
import  logoTienda from "../img/fun_kratos.png"
import  CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const appName = () => `Funko Store`

    return (
        <nav className="navbar-full">
            <div className="navbar-logo">
                <Link to={`/`}>
                    <img src={ logoTienda } className="img-logo" /> { appName() } 
                </Link>
            </div>
            <div className="navbar-busc">
                <input type="text" name="main_search" id="main_search" className="search-input"  />
            </div>
            <div className="navbar-busc-icon">
                <img src={searchIcon} className="search-icon" />
            </div>
            <div className="navbar-menu">
                <div id="categorias">
                    <ul className="lista-cat">
                        <li>
                            <Link to="/category/Anime" className="cats">Anime</Link>
                        </li>
                        <li>
                            <Link to="/category/Musica" className="cats">Musica</Link>
                        </li>
                        <li>
                            <Link to="/category/Series" className="cats">Series</Link>
                        </li>
                        <li>
                            <Link to="/category/Peliculas" className="cats">Peliculas</Link>
                        </li>
                        <li>
                            <Link to="/category/Videojuegos" className="cats">Videojuegos</Link>
                        </li>
                    </ul>
                </div>
                <div id="perfil" className="divs-menu">
                    <img src={profileIcon} className="search-icon" />
                    <p>Perfil</p>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;