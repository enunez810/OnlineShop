import data from "../data/data.json"
import Fcards from "./Fcards"

import { useState, useEffect } from "react";

const ItemListContainer = ({greeting}) => {

    const [info, setInfo] = useState(null);
    const [cargando, setCargando] = useState(true);     
    const [msgerror, setMsgError] = useState(false);     

    const obtenerData = new Promise((resolve, reject) => {
        setTimeout(() =>  {
            resolve(data)
            //reject("Error Recuperando los Productos!!!")
        }, 3000);
    })
    .then((respuesta) => {
        setInfo(respuesta)
        setCargando(false)
    })
    .catch((error) => {
        setCargando(false)
        setMsgError(error)
    })


    return (
        <>
            <section>
                <div class="alert alert-primary" role="alert">
                    <h2>Funkos a la Venta</h2>
                </div>
                {
                    (cargando) ? 
                
                <div> 
                    <img src="src/assets/images/loading.gif" />
                    <p>Cargando Productos</p>
                </div>
                : 
                    msgerror ? 
                    <div> {msgerror}</div>
                    : 
                        info && info.length > 0 ?
                            <div className="row">
                                {
                                    info.map((item) => (
                                        <Fcards 
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