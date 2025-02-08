import '../styles/Footer.scss'
import '../styles/Variables.scss'
import logo from '../images/epdl-logo.jpg'

function Footer() {
  return (
    <footer>
        <nav className="footer">
            <div className="footer__copyright">
                <img src={logo} alt="Es el logo de El Patio de Luisa" className="logo"/>
                <p>© Copyright</p>
            </div>
            <ul className="footer__social-media">
                <li>
                    <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i className="fa-brands fa-youtube"></i>
                </li>
                <li>
                    <i className="fa-brands fa-tiktok"></i>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer