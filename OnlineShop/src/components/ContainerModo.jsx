import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContainerModo = ({ children }) => {
    const {modo} = useContext(ThemeContext);

    return (
        <div className={ `${modo === "oscuro" ? "modo-oscuro" : "modo-claro"}` }>
            {
                children
            }
        </div>
    )
}
export default ContainerModo;