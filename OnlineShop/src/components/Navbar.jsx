import "./Navbar.css"

import  searchIcon from "../assets/find.svg"
import  profileIcon from "../assets/user-profile.svg"
import  logoTienda from "../img/fun_kratos.png"
import  sunIcon from "../assets/images/sun.svg"
import  moonIcon from "../assets/images/moon.svg"

import  CartWidget from "./CartWidget"
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext, useEffect, useState } from "react"
import ContainerModo from "./ContainerModo"; 
import { db } from "../configs/firebaseConfig";
import { getDocs, collection, query as firestoreQuery, orderBy } from "firebase/firestore"

const Navbar = () => {
    const appName = () => `Funko Store`

    const { setModo, modo } = useContext(ThemeContext);
    const { setIconmodo, iconmodo } = useContext(ThemeContext);
    const [ categorias, setCategorias] = useState("");     
    const [ cargando, setCargando] = useState(true);     

    const navigate = useNavigate();  

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

    const GoToCategoria = (event) => {
        const categoria = event.target.value;
        navigate(`/category/${categoria}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Se define un firestoreQuery para poder pasar parametros de consulta como el Order By 
                //  El segundo argumento de la función collection es el nombre de nuestra colección
                const queryCategorias = firestoreQuery(collection(db, "funkos_categorias"), orderBy('categoria'));
                const querySnapshot = await getDocs(queryCategorias);
                
                // para obtener los documentos (que son los datos que contiene la colección) debo mapearlos de la siguiente manera
                const obtenerCategorias = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))

                setCategorias(obtenerCategorias)
                setCargando(false);
    
            } catch(error) {
                console.log(error);
            }
        }

        fetchData()
    },[])    

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
                <div id="categorias" className="divcats">
                    <div>Categorias:   </div>
                    <select id="categorias" onChange={GoToCategoria}>
                        <option value=""></option>
                    {
                        !cargando ?
                            // SI HAY CATEGORIAS CARGADAS 
                            categorias && categorias.length > 0 ?
                            categorias.map((item) => (
                                <option value={item.categoria} key={item.id}>{item.categoria}</option>
                            ))
                            : 
                            // SI NO HAY CATEGORIAS EN LA BD 
                            <option value="0">No Hay Categorias Cargadas</option>
                        : 
                        // SI ESTA CARGANDO
                        <option value="0">Cargando Categorias</option>
                    }
                    </select>
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