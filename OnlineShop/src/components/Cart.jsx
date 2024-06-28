import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { getDocs, collection, getDoc, doc } from "firebase/firestore"
import { db } from "../configs/firebaseConfig";


const Cart = () => {
    const { funkoid, funkoname, funkocant, funkoimg } = useParams();
    const path = "/src/assets/images/funkos/";

    const { cantItem, setCantItem } = useContext(CartContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const funkoPrice = 0; 
    const funkoStock = 0; 
    
    let data = {};

    useEffect(() => {
    }, [setCartItems, setCantItem]);
    
    useEffect(() => {

        if (cartItems.length == 0) {
            console.log("Reviso si hay productos en el LocalStorage");
            const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const storedCantItem = JSON.parse(localStorage.getItem("cantItem")) || 0;
            setCartItems(storedCartItems);
            setCantItem(storedCantItem);
        }

        if (funkoid && funkoname && !isNaN(funkocant) && funkocant > 0) {
            
            const fetchData = async () => {
                try {
                    if (funkoid) {
                        console.log("PASO 1 " + funkoid);
                        // Si se proporciona un ID de documento, buscar solo ese documento
                        const docRef = doc(db, "funkos_productos", funkoid);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            console.log("EXISTE " + docSnap.data());
                            //console.log(docSnap.price);
                            //data = { price: docSnap.price, stock: docSnap.stock};
                            const data = { id: docSnap.id, ...docSnap.data() };

                            const newItem = {
                                id: funkoid,
                                name: funkoname,
                                cant: Number(funkocant),
                                img: funkoimg,
                                price: data.price,
                                stock: data.stock 
                            };

                            console.log(data.price);  
                            console.log(docSnap.id);
                            console.log(docSnap.data());
                            console.log(docSnap.price);


                            // Verifico si el funko ya está en el carrito
                            const itemIndex = cartItems.findIndex(item => item.id === funkoid);

                            if (itemIndex === -1) {
                                // Si no está en el carrito, lo agrego como nuevo item
                                setCartItems(prevCartItems => [...prevCartItems, newItem]);
                            } else {
                                // Si ya está en el carrito, actualizo la cantidad
                                const updatedCartItems = cartItems.map(item =>
                                    item.id === funkoid ? { ...item, cant: item.cant + Number(funkocant) } : item
                                );
                                setCartItems(updatedCartItems);
                            }
                            
                            localStorage.setItem("funkoCart", JSON.stringify(cartItems));
                            localStorage.setItem("cantFunkos", JSON.stringify(cantItem));
                    
                            // Actualizo la cant de items en el carrito
                            setCantItem(prevCantItem => prevCantItem + Number(funkocant));

                            console.log("Cart Items actualizados: ", cartItems);


                        }
                    }

                    
                } catch (error) {
                    console.log("Dio error " + funkoid + error);
                }
            };
            fetchData();
            
        }

    }, []);

    return (
        <>
            {
                (funkoid && funkoname && funkocant > 0)  ?
                <>
                    <div className="div_add_cart_gretting">Felicidades has agregado al carrito: </div> 
                    <div className="div_add_cart">
                        <div className="div_add_cart_img bckcolor_left">
                            <img src={`${path}${funkoimg}`} className="img-producto" />  
                        </div>
                        <div className="div_add_cart_data bckcolor_right">
                            Ud. compro el funko: {funkoname} <br />
                            Cantidad de unidades: {funkocant}  {funkocant > 1 ? " Unidades" : " Unidad" }  
                        </div>
                    </div>
                </>
                :
                <></>
            }
            {
                (cartItems) ? 
                    <div>
                        <h2 className="div_add_cart_gretting">Tu Carrito</h2> 
                        <div className="row al-center">
                        { 
                            cartItems.map((item) => (
                                <>
                                    <div className="col-sm-3 text-center myCard" key={item.id}>
                                        <img src={`${path}${item.img}`} className="img-producto" />  
                                        <h4>{item.name} </h4> 
                                        <h4>Cantidad: {item.cant} </h4> 
                                    </div>
                                </>
                            ))
                        }
                        </div>                                    
                    </div>
                : 
                    <h2>Carrito Estándar2</h2> 
            }

            <div className="div_botonera">
                <div className="div_volver">
                    <Link to="/catalogo">
                        <button className="boton-volver">
                            Seguir Comprando
                        </button>
                    </Link>
                </div>
                <div className="div_volver">
                    <Link to="/checkout">
                        <button className="boton-volver">
                            Hacer tu Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Cart;
