# Tienda Online -> Funko Store 
Ejemplo de Tienda online para el curso de ReactJs comisión 66465, tienda online para la comercializacion de Funkos Pops    

##**info**##: La Rama del Proyecto es la **Master** 

En este proyecto se utilizo la tecnología **React + Vite**  , usando tambien bases de datos **Firebase**.   

Tambien se usaron unas librerias de estilos como: 
* Boootstrap 5 -> [link](https://getbootstrap.com/ "Bootstrap").
* SweetAlert2  -> [link](https://sweetalert2.github.io/ "SweetAlert2").

**Bootstrap: ** lo use mas que nada para el diseño y la colocación de Divs de manera rápida y acertada. 
**SweetAlert: ** lo use para el mensaje final cuando se termina / guarda y se envía el Pedido a la BD.  me hubiese gustado poner mas mensajes con esta librería pero estaba mas enfocado en la funcionalidad de la App. 

Me quedan alguno desafíos que quiero hacer, como integrar una app de Login para el Sitio  asi poder hacer un par de Features como la lista de deseados y el listado de mis Pedidos, ademas de la correccion de algunos pequeños bugs que me quedan.  

En la usabilidad de la App: hay un modo oscuro y modo claro que funciona en el Home, en las Categorias y en el detalle, falta aun implementarlas en otros componentes secciones. 

Graba los Items en un contexto del Carrito y tambien en el LocalStorage.  si estando en el carrito se pulsa F5 no se pierden los datos ls lee del Localstorage y lo *Regenera* en el contexto.  Aun falta implementarlo en otros componentes. 

El enrutamiento se hizo con la libreria *react-router-dom* de la Siguiente manera: 
~~~~
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
~~~~


