import { NavLink, Link } from "react-router-dom"

import logo from "../../assets/logo.png"
import './style.scss'

function Header() {
    return (
        <header className="header">
			<Link className="header-logo" to="/">
				<img src={logo} alt="Kasa Logo"/>
			</Link>
			<nav className="header-nav">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/About"
				>
					A Propos
				</NavLink>
			</nav>
		</header>
    )
}

export default Header