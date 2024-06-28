import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Catalogo from './components/Catalogo'
import Navbar from './components/Navbar'
import ErrorNotFound from './components/ErrorNotFound'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { ThemeProvider } from './contexts/ThemeContext'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider>
      <CartProvider>
          <Navbar />
          <Routes>
              <Route path="/" element={ <Catalogo /> } />
              <Route path="/catalogo" element={ <Catalogo /> } />
              <Route path="/category/:categoryId" element={ <Catalogo /> } />
              <Route path="/item/:funkoid/:funkoname" element={ <ItemDetailContainer /> } />
              <Route path="/NotFound" element={ <ErrorNotFound /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/cart/:funkoid/:funkoname/:funkocant/:funkoimg" element={ <Cart /> } />
              <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </CartProvider>
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
