import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)
  const usuarioConectado = () => `Eduardo`

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='w-message'>
        <ItemListContainer  greeting = { usuarioConectado()}         />
      </div>
    </>
  )
}

export default App
