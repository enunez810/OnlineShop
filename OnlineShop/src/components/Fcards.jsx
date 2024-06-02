import "./Fcards.css"

const Fcards = ({producto, precio, imagen, categoria}) => {

    return (
        <div className="col-sm-3">
            <h4>
                {categoria} 
            </h4>
            <div>
                <img src={`../../src/assets/`+imagen}    alt={producto} className="img-producto" />  
            </div>
            <h3>
                {producto}
            </h3>
            <h4>
                Precio {precio}
            </h4>
            </div>
    )
}

export default Fcards;