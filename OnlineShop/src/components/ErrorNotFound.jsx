import imgfuria from "../assets/images/furia.png"
import { useContext} from "react"
import { CartContext } from "../contexts/CartContext"


import './ErrorNotFound.css'


//const Fcards = ({id, producto, precio, imagen, categoria}) => {
const ErrorNotFound = () => {
    const {cantItem} = useContext(CartContext);

    return (
        <>
            <div className="home-bannner">
                <div className="box_left_not_found">
                    <img src={ imgfuria }  />  
                </div>
                <div className="box_right_not_found">
                    <h1>Opss!!!</h1>    
                    <h2>Funko no Encontrado!!!!</h2>    
                </div>
            </div>
            
        </>
    )
    
}

export default ErrorNotFound;