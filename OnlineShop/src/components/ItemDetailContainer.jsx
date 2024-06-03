import { useParams, Link  } from "react-router-dom";
import data from "../data/data.json";
import { useState, useEffect } from "react";
import "./ItemDetailContainer.css"
import imgTarjetas from "../assets/images/tarjetas.png"
import  cartIcon from "../assets/cart.svg"

const ItemDetailContainer = () => {
    const { funkoid, funkoname } = useParams();
    const [funko, setFunko] = useState(null);

    useEffect(() => {
        const filteredFunko = data.find(product => {
            return product.id.toString() === funkoid.toString();
        });

        setFunko(filteredFunko);
    }, [funkoid]);

    function formatNumber(numero) {
        // Le pongo dos decimales
        let numStr = numero.toFixed(2);

        // le cambio el punto por la coma
        numStr = numStr.replace('.', ',');

        // Le pongo los separadores de miles
        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');    
    }

    return (
        <>

            <div className="item-full">
                {funko ? 
                (
                    <>
                            <div className="item-div-imagen">
                                <img src={`../../src/assets/`+funko.image}    alt={funko.description} />  
                            </div>
                            <div className="item-div-detalle">
                                <div>Detalles del Funko</div>
                                <p className="p_nombre_funko">Funko Pop: {funko.title} #{funko.id}</p>
                                <p className="item_category">Categoria: {funko.category}</p>
                                <p className="p_precio_funko">Precio: $  {formatNumber(funko.price)}</p>
                                <p>Foto: {funko.image}</p>
                                <img src={imgTarjetas}   />  
                                <p className="item-otra-info">Envio gratis a partir de $ 90.000,00</p>
                                <p>
                                    <button>
                                        <img src={cartIcon} className="cart-icon" />
                                        Agregar al carrito
                                    </button>
                                </p>
                                
                                <p>Descripción del Funko: {funko.description}</p>

                            </div>
                    </>
                ) : (
                    <p>Funko no encontrado</p>
                )}
            </div>
            <div className="div_volver">
                <Link to="/catalogo">
                    <button className="boton-volver">
                            Volver al Listado
                    </button>
                </Link>
            </div>
        </>
    );
}

export default ItemDetailContainer;
