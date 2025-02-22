import '../styles/Search.scss';
import PropTypes from "prop-types";


function Search({searchInput, setSearchInput, quitarAcentos}) {

  const handleChange = (ev) => {
    setSearchInput(quitarAcentos(ev.target.value.toLowerCase()));

  }
  return (
    <section className="search">
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input id="inputSearch" type="text" className="search__input" placeholder="Busca tu sesión favorita" onChange={handleChange} value={searchInput}/>
    </section>
  )
}

Search.propTypes={
  setSearchInput:PropTypes.func,
  searchInput:PropTypes.string,
  quitarAcentos:PropTypes.func
}


export default Search