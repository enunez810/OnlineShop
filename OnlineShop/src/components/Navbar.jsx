import "./Navbar.css"
import  searchIcon from "../assets/find.svg"
import  profileIcon from "../assets/user-profile.svg"
import CartWidget from "./CartWidget"


const Navbar = () => {
    const appName = () => `Funko Store`

    return (
        <nav className="navbar-full">
            <div className="navbar-logo">
                <img src="../src/img/logotienda.png" className="img-logo" />  { appName() } 
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
                            <a href="#"  className="cats">Anime</a>
                        </li>
                        <li>
                            <a href="#"  className="cats">Musica</a>
                        </li>
                        <li>
                            <a href="#"  className="cats">Series</a>
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