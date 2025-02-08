import '../styles/Header.scss'
import '../styles/Variables.scss'
import logo from '../images/epdl-logo.jpg'

function Header() {
  return (
      
    <header className='header'>
        <img src={logo} alt="Es el logo de el Patio de Luisa" className="logo"/>
        <nav className="header__nav">
            <i className="fa-solid fa-bars hidden"></i>
            <ul className="header__nav--menu">
                <li className="menu-item">¿quiénes somos?</li>
                <li className="menu-item">artistas</li>
                <li className="menu-item">eventos</li>
                <li className="menu-item">contacto</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header