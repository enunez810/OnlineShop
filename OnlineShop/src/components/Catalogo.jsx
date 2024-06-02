import { useState } from 'react'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'


const Catalogo = () => {
    const [count, setCount] = useState(0)
    const usuarioConectado = () => `Eduardo`
  
    return (
        <>
            <div className='w-message'>
                <ItemListContainer  greeting = { usuarioConectado()}         />
            </div>
        </>
    )
}

export default Catalogo; 
