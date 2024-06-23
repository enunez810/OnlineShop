import { children, createContext, useState } from "react";
import  sunIcon from "../assets/images/sun.svg"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [modo, setModo] = useState("claro");
    const [iconmodo, setIconmodo] = useState({sunIcon});

    return (
        <ThemeContext.Provider value={{modo, setModo, iconmodo, setIconmodo}}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider}