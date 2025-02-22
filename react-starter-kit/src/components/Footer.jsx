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
                    <a 
                    href="https://www.instagram.com/patiodeluisa/" target='_blank'
                    rel="noopener noreferrer" 
                    aria-label="Instagram de El Patio de Luisa"
                    >
                        <i className="fa-brands fa-instagram icon"></i>
                    </a>
                </li>
                <li>
                    <a 
                    href="https://www.youtube.com/results?search_query=patio+de+luisa" 
                    target='_blank'
                    rel="noopener noreferrer" 
                    aria-label="YouTube de El Patio de Luisa"
                    >
                        <i className="fa-brands fa-youtube icon"></i>
                    </a>
                </li>
                <li>
                    <a 
                    href="" 
                    target='_blank'
                    aria-label="TikTok de El Patio de Luisa"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-tiktok icon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer