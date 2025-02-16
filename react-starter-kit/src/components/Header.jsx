import '../styles/Header.scss'
import '../styles/Variables.scss'
import logo from '../images/epdl-logo.jpg'
import PropTypes from "prop-types"

function Header({menuStatus, setMenuStatus}) {

  const handleClick = ()=> {

    if(menuStatus === 'hidden') {
      setMenuStatus('')
    } else if (menuStatus === '') {
      setMenuStatus('hidden')
    }

  }

  return (
      
    <header className='header'>
        <img src={logo} alt="Es el logo de el Patio de Luisa" className="logo"/>
        <nav className="header__nav">
            <button className="menu-button" onClick={handleClick}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`header__nav--menu ${menuStatus}`}>
                <li className="menu-item">¿quiénes somos?</li>
                <li className="menu-item">artistas</li>
                <li className="menu-item">eventos</li>
                <li className="menu-item">contacto</li>
            </ul>
            <ul className="menu-desktop">
                <li className="menu-desktop-item">¿quiénes somos?</li>
                <li className="menu-desktop-item">artistas</li>
                <li className="menu-desktop-item">eventos</li>
                <li className="menu-desktop-item">contacto</li>
            </ul>
        </nav>
    </header>
  )
}

Header.propTypes={
  menuStatus:PropTypes.string,
  setMenuStatus: PropTypes.func
}

export default Header