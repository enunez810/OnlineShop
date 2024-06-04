import { useState } from 'react'
import Navbar from './/Navbar'
import ItemListContainer from './/ItemListContainer'
import { Link } from 'react-router-dom'
import  imgCatalogo from "../assets/images/catalogo.png"


const Home = () => {
    const [count, setCount] = useState(0)
    const usuarioConectado = () => `Eduardo`
  
    return (
        <>
            <div className='home-bannner'>
                <Link to={`/catalogo`}>
                    <img src={imgCatalogo}></img>
                </Link>
            </div>
        </>
    )
}

export default Home; 
