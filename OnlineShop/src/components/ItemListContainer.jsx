import data from "../data/data.json"
import Fcards from "./Fcards"

import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom"; 

const ItemListContainer = ({greeting}) => {

    const [info, setInfo] = useState(null);
    const [cargando, setCargando] = useState(true);     
    const [msgerror, setMsgError] = useState(false);     

    const { categoryId } = useParams(); 
    //const [ filtro, setFiltro] = useState("");     

    useEffect(() => {
        //setFiltro(categoryId);
        const obtenerData = new Promise((resolve, reject) => {
            setTimeout(() =>  {
                resolve(data)
                //reject("Error Recuperando los Productos!!!")
            }, 500);
        })
        .then((respuesta) => {
    
            let infoFiltrada = [];

            if (categoryId)  {
                //infoFiltrada = respuesta;
                infoFiltrada = respuesta.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
            } else {
                infoFiltrada = respuesta;
            }
            setInfo(infoFiltrada)
            setCargando(false)
    
            console.log(categoryId);
            console.log(infoFiltrada);
        })
        .catch((error) => {
            setCargando(false)
            setMsgError(error)
        })

    },  [categoryId])


    return (
        <>
            <section className="w-100">
                <div className="orange-message-box">
                    <h2>Funkos a la Venta</h2>
                </div>
                {
                    (cargando) ? 
                
                    <div  className="al-center"> 
                        <img src="/src/assets/images/loading.gif"  className="img-loading"/>
                        <div className="orange-message-box"> 
                            <p>Cargando Funkos</p>
                        </div>
                    </div>
                : 
                    msgerror ? 
                    <div> {msgerror}</div>
                    : 
                        info && info.length > 0 ?
                            <div className="row w-90 al-center">
                                {
                                    info.map((item) => (
                                        <Fcards 
                                            key = {item.id}
                                            id = {item.id}
                                            producto = {item.title}
                                            precio = {item.price}
                                            imagen = {item.image}
                                            categoria = {item.category}
                                        />
                                        
                                    ))
                                }

                            </div>
                        : 
                            <div>
                                No Hay Productos
                            </div>
                }
            </section>
        </>
    )
}

export default ItemListContainer; 