import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

export default function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
        
        <nav className="navbar">
            <ul className="navbar-links"> 
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/directory">Directory</NavLink></li>
                <li><NavLink to="/add" className="addSymbol"> + </NavLink></li>
            </ul>
             <button className="buttons-symbol" onClick={toggleTheme} >{theme === 'light' ? "⏾" : "☀︎" }</button>
        </nav>
        </>
    )
}