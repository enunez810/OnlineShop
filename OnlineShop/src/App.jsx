import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Catalogo from './components/Catalogo'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Catalogo /> } />
            <Route path="/catalogo" element={ <Catalogo /> } />
            <Route path="/category/:categoryId" element={ <Catalogo /> } />
            <Route path="/item/:funkoid/:funkoname" element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
