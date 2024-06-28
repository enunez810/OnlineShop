import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Checkout.css"
import { db } from "../configs/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Swal from 'sweetalert2'


const Checkout = () => {
    const path = "/src/assets/images/funkos/";
    const navigate = useNavigate();  
    const [ numPedido, setNumPedido ] = useState('')

    const { cartItems, setCartItems, cantItem, setCantItem } = useContext(CartContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        repeatEmail: ''
    });
    let totalCompra = 0;
    let totalCantFunkos = 0;

    const [errors, setErrors] = useState({
        email: '',
        repeatEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    console.log(cartItems);

    function formatNumber(numero) {
        // Le pongo dos decimales
        let numStr = numero.toFixed(2);

        // le cambio el punto por la coma
        numStr = numStr.replace('.', ',');

        // Le pongo los separadores de miles
        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');    
    }


    const newCart = cartItems.map(item =>
        totalCompra = totalCompra + (item.price * item.cant) 
        //totalCantFunkos = totalCantFunkos + item.cant
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailError = validateEmail(formData.email) ? '' : 'El email no es válido';
        const repeatEmailError = formData.email === formData.repeatEmail ? '' : 'Los emails no coinciden';
        
        setErrors({
            email: emailError,
            repeatEmail: repeatEmailError
        });

        if (!emailError && !repeatEmailError) {
            //alert('Formulario enviado con éxito');


            const miCompra = {
                cliente: {
                    nombre: formData.firstName + ' ' + formData.lastName,
                    telefono: formData.phone,
                    email: formData.email
                },  
                totalCompra: totalCompra, 
                fecha_compra: new Date().toISOString(),
                funkos : {
                    items: cartItems.map(item => ({
                        id: item.id,
                        nombre: item.name,
                        cantidad: item.cant,
                        precio: item.price
                    }))
                }
            };
            console.log(miCompra);

            const miPedido = await addDoc(collection(db, "funkos_compras"), miCompra);
            setNumPedido(miPedido.id);
    
            //Swal.fire("Felicitaciones su pedido se ha generado con exito con el id: " + miPedido.id)
            Swal.fire({
                title: "Felicitaciones",
                text: `Su pedido se ha generado con éxito con el id: ${miPedido.id}`,
                icon: "success",
                confirmButtonText: "Volver al Home"
            }).then(() => {
                setCartItems([]);
                setCantItem(0);
                localStorage.clear();

                navigate("/"); // Redirigir al home al hacer clic en OK
            });

        }
    };


    return (
        <>
            <div className="row al-center">
            <div className="margen-top">CheckOut</div>
            { 
                cartItems.map((item) => (
                    <>
                        <div class="container" key={item.id}>
                            <div class="row">
                                <div class="col-12 col-md-2">
                                    <img src={`${path}${item.img}`} className="img-producto-small" />  
                                </div>
                                <div class="col-12 col-md-4">
                                    {item.name}
                                </div>
                                <div class="col-12 col-md-3">
                                    Cantidad: {item.cant} / {item.stock}
                                </div>
                                <div class="col-12 col-md-3">
                                    Precio: {formatNumber(item.price)}
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 ml-auto">
                            <b>Total a Pagar: {formatNumber(totalCompra)}</b>
                            
                        </div>
                    </div>
                </div>
                
            { (numPedido ==='') ?
                <>
                    <div className="container w-40">
                        <h2>Cliente a enviar el Pedido</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="firstName">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="repeatEmail">Repetir Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="repeatEmail"
                                    name="repeatEmail"
                                    value={formData.repeatEmail}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.repeatEmail && <small className="text-danger">{errors.repeatEmail}</small>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-margin-bot">Enviar</button>

                        </form>

                    </div>                
                </>
                : 
                <>
                    <h3>
                         id del pedido:  {numPedido}
                    </h3>
                </>

            }
            


            </div>                                    
        
        </>


    )
}

export default Checkout;