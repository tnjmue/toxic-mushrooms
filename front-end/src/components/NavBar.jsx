import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

export default function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
        
        <nav className="navbar">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/directory"><li>Directory</li></Link>
                <Link to="/add"><li className="addSymbol"> + </li></Link>
                <button className="buttons-symbol" onClick={toggleTheme} >{theme === 'light' ? "⏾" : "☀︎" }</button>
        </nav>
        </>
    )
}