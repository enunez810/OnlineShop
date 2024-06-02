import { useState } from 'react'
import Navbar from './/Navbar'
import ItemListContainer from './/ItemListContainer'
import { Link } from 'react-router-dom'

const Home = () => {
    const [count, setCount] = useState(0)
    const usuarioConectado = () => `Eduardo`
  
    return (
        <>
            <div className='home-bannner'>
                <Link to={`/catalogo`}>
                    <img src="../src/assets/images/catalogo.png"></img>
                </Link>
            </div>
        </>
    )
}

export default Home; 
