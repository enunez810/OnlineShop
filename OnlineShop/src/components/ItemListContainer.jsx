//import data from "../data/data.json"
import { db } from "../configs/firebaseConfig";
import { getDocs, collection } from "firebase/firestore"

import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom"; 
import ContainerModo   from "../components/ContainerModo";
import Fcards from "./Fcards"

import imgLoading from "../assets/images/loading.gif"

const ItemListContainer = ({greeting}) => {

    const [info, setInfo] = useState(null);
    const [cargando, setCargando] = useState(true);     
    const [msgerror, setMsgError] = useState(false);     

    const { categoryId } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                //el segundo argumento de la función collection es el nombre de nuestra colección
                const querySnapshot = await getDocs(collection(db, "funkos_productos"))
                
                // para obtener los documentos (que son los datos que contiene la colección) debo mapearlos de la siguiente manera
                const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))

                let infoFiltrada = [];

                if (categoryId)  {
                    infoFiltrada = obtenerDocumentos.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
                } else {
                    infoFiltrada = obtenerDocumentos;
                }
                setInfo(infoFiltrada)
                setCargando(false)
    
                //console.log(obtenerDocumentos)
            } catch(error) {
                setCargando(false)
                setMsgError(error)
            }
        }

        fetchData()
    }, [categoryId])

    return (
        <ContainerModo>
            <section className="w-100">
                <div className="orange-message-box">
                    <h2>Funkos a la Venta</h2>
                </div>
                {
                    (cargando) ? 
                
                    <div  className="row al-center"> 
                        <img src={ imgLoading }  className="img-loading"/>
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
        </ContainerModo>
    )
}

export default ItemListContainer; 