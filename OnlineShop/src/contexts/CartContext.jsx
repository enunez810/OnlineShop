import { children, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // SE USA SOLO PARA PARA SABER LAS CANTIDADES DE PRODUCTOS QUE SE AGREGARON 
    //      PARA VISUALIZARLOS EN EL CARRITO 
    const [cantItem, setCantItem] = useState(0);

    // SE USA PARA VER EL ARRAY DE OBJETOS INCLUIDOS EN EL CARRITO 
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <CartContext.Provider value={{cantItem, setCantItem, cartItems, setCartItems}}>
            {
                children
            }
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider}