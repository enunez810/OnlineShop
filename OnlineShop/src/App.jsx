import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Catalogo from './components/Catalogo'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <Routes>
              <Route path="/" element={ <Catalogo /> } />
              <Route path="/catalogo" element={ <Catalogo /> } />
              <Route path="/category/:categoryId" element={ <Catalogo /> } />
              <Route path="/item/:funkoid/:funkoname" element={ <ItemDetailContainer /> } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
    // NOTA PRE-ENTREGA 2: 
    // Inicialmente en el "/" tendre que renderice el componente <Home /> que tendra algun Slide y Seleccion de Categorias mas copadas
    //    Pero para la Preentrega 2 renderizara <Catalogo /> este internamente tendra el  <ItemListContainer />, 
    //    pero en un Futuro le voy a poner otras cosas al Catalogo para mostrar ademas de los Solo los Productos.  
  )
}

export default App
