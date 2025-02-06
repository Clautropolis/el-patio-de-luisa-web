

function Header() {
  return (
    <>    
        <img src="/images/epdl-logo.jpg" alt="Es el logo de el Patio de Luisa" className="logo"/>
            <nav className="header__nav">
                <i className="fa-solid fa-bars hidden"></i>
                <ul className="header__nav--menu">
                    <li className="menu-item">¿quiénes somos?</li>
                    <li className="menu-item">artistas</li>
                    <li className="menu-item">eventos</li>
                    <li className="menu-item">contacto</li>
                </ul>
            </nav>
    </>
  )
}

export default Header