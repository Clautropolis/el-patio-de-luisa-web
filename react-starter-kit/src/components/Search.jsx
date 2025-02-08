import '../styles/Search.scss'

function Search() {
  return (
    <section className="search">
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input type="text" className="search__input" placeholder="Busca tu sesión favorita"/>
    </section>
  )
}

export default Search