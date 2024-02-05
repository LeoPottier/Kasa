import logo from "../../assets/logo-footer.png"
import "./style.scss"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa-logo" className="footer-img"/>
            <p className="footer-p">
                2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer