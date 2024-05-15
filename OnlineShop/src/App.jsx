import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
      <ItemListContainer  greeting = { usuarioConectado()}         />
      <h4>Vite + React + OnLineShop + Edu + Luchy</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
