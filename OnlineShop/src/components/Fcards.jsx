import "./Fcards.css"
import { Link } from "react-router-dom";

const Fcards = ({id, producto, precio, imagen, categoria}) => {

    return (
        <div className="col-sm-3 text-center myCard">
                <span id="cont_category">
                    {categoria} 
                </span>
                <Link to={`/item/${id}/${producto}`}>
                    <div>
                        <img src={`../../src/assets/`+imagen}    alt={producto} className="img-producto" />  
                    </div>
                    <h3 className="myTitle f-size-18">
                        {producto}
                    </h3>
                </Link>
                <span id="cont_price" className="myTitle">
                    Precio {precio}
                </span>
        </div>
    )
}

export default Fcards;