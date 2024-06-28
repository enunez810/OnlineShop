import { useParams, Link, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection, getDoc, doc } from "firebase/firestore"
import { db } from "../configs/firebaseConfig";

import ContainerModo    from "../components/ContainerModo";
import { useContext} from "react"
import { CartContext } from "../contexts/CartContext"

import ItemQuantitySelector from "./ItemQuantitySelector"

import "./ItemDetailContainer.css"
import imgTarjetas from "../assets/images/tarjetas.png"
import cartIcon from "../assets/cart.svg"
import imgLoading from "../assets/images/loading.gif"
import ErrorNotFound from "./ErrorNotFound";

//import data from "../data/data.json";

const ItemDetailContainer = () => {
    const { funkoid, funkoname } = useParams();
    const [ funko, setFunko] = useState(null);
    const [ cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
    const [ cargando, setCargando] = useState(true);     
    const {cantItem} = useContext(CartContext);

    //const [ item, setItem] = useState({ id: funkoid, name: funkoname }); // Ejemplo de item
    const navigate = useNavigate();  


    const handleQuantityChange = (event) => {
        setCantidadSeleccionada(Number(event.target.value));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (funkoid) {
                    // Si se proporciona un ID de documento, buscar solo ese documento
                    const docRef = doc(db, "funkos_productos", funkoid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = { id: docSnap.id, ...docSnap.data() };
                        setFunko(data); // Usar un array para mantener consistencia
                    } else {
                        console.log("ELSE EXISTE - NO ESTA ESTE FUNKO ");
                    }
                } else {
                    setInfo(infoFiltrada);
                }
                setCargando(false);
            } catch (error) {
                setCargando(false);
                console.log("Dio error " + funkoid);
            }
        };

        fetchData();
    }, [funkoid]);

    function formatNumber(numero) {
        // Le pongo dos decimales
        let numStr = numero.toFixed(2);

        // le cambio el punto por la coma
        numStr = numStr.replace('.', ',');

        // Le pongo los separadores de miles
        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');    
    }

    
    const insertarCarrito = () => {
        // Para Pasar el nombre de la Imagen como parametro 
        const parts = funko.image.split('/');
        const imageName = parts[parts.length - 1];
        
        navigate(`/cart/${funkoid}/${funkoname}/${cantidadSeleccionada}/${imageName}`);
    }

    return (
        <ContainerModo>

            <div className="item-full">
                {
                (cargando) ? 

                    <div  className="row al-center"> 
                        <img src={ imgLoading }  className="img-loading"/>
                        <div className="orange-message-box"> 
                            <p>Cargando Funko</p>
                        </div>
                    </div>
                : 
                    funko ? 
                    (
                        <>
                            <div className="item-div-imagen">
                                <img src={`../../src/assets/`+funko.image}    alt={funko.description} />  
                            </div>
                            <div className="item-div-detalle">
                                <div>Detalles del Funko - Id: {funko.id}</div>
                                <p className="p_nombre_funko">Funko Pop: {funko.title}</p>
                                <p className="item_category">Categoria: {funko.category}</p>
                                <p className="p_precio_funko">Precio: $  {formatNumber(funko.price)}</p>
                                <p>Descripción del Funko: {funko.description}</p>
                                <p>Stock Disponible: {funko.stock} unidades</p>
                                <ItemQuantitySelector
                                    stock_max = {funko.stock}  
                                    onCantidadChange={handleQuantityChange}
                                />

                                { /*
                                <img src={imgTarjetas}   />  
                                <p className="item-otra-info">Envio gratis a partir de $ 90.000,00</p>
                                */}
                                <p>
                                    <button onClick={insertarCarrito}>
                                        <img src={cartIcon} className="cart-icon" />
                                        Agregar al carrito
                                    </button>
                                </p>
                                
                                <p>Descripción del Funko: {funko.description}</p>

                            </div>
                        </>
                    ) : (
                        <ErrorNotFound />
                    )}
            </div>
            <div className="div_volver">
                <Link to="/catalogo">
                    <button className="boton-volver">
                            Volver al Listado
                    </button>
                </Link>
            </div>
        </ContainerModo>
    );
}

export default ItemDetailContainer;
