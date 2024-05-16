import  info from "../assets/info.svg"

const ItemListContainer = ({greeting}) => {

    return (
        <>
            <div class="alert alert-primary" role="alert">
                <h5>Hola { greeting } Bienvenido a Funko Store !!!  </h5>
            </div>
        </>
    )
}

export default ItemListContainer; 