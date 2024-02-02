import { Link } from "react-router-dom"

import logo from "../../assets/logo.png"
import './style.css'

function Header() {
    return (
        <header className="header">
            <Link to ="/">
                <img src={logo} alt="kasa-logo"></img>
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </header>
    )
}

export default Header