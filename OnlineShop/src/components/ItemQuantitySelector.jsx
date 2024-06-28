
// Hago que se pueda seleccionar una cantidad desde 1 hasta lo que hay en Stock del Producto

const ItemQuantitySelector = ({stock_max , onCantidadChange}) => {

    const cantidades = [];
    for (let row = 1; row <= stock_max; row++) {
        cantidades.push(row);
    }

    return ( 
        <>
            <p>Comprar: 
                <select id="cantidad" onChange={onCantidadChange}>
                {
                 cantidades.map((cantidad) => (
                    <option key={cantidad} value={cantidad}>
                        {cantidad} {(cantidad == 1? "Unidad" : "Unidades")}
                    </option>
                ))}    
                </select>
            </p>
        </>
    )
}
export default ItemQuantitySelector;