import "./Navbar.css"

import  searchIcon from "../assets/find.svg"
import  profileIcon from "../assets/user-profile.svg"
import  logoTienda from "../img/fun_kratos.png"
import  sunIcon from "../assets/images/sun.svg"
import  moonIcon from "../assets/images/moon.svg"

import  CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import ContainerModo from "./ContainerModo"; 


const Navbar = () => {
    const appName = () => `Funko Store`

    const { setModo, modo } = useContext(ThemeContext);
    const { setIconmodo, iconmodo } = useContext(ThemeContext);

    const handlerClickModos = () => {
        if (modo === "claro") 
        {
            setModo("oscuro");
            setIconmodo(moonIcon);
        }
        else 
        {
            setModo("claro");
            setIconmodo(sunIcon);
        }
    }

    

    return (
        <ContainerModo>
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
                <div id="div_modo" className="divs-menu" onClick={handlerClickModos}> 
                    <img src={iconmodo} className="search-icon" />
                    <p>{ modo }</p>
                </div>
            </div>
        </nav>
        </ContainerModo>
    )
}

export default Navbar;