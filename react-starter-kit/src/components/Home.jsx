import ArtistsList from "./ArtistsList";
import Search from "./Search";
import PropTypes from "prop-types"


function Home({datajson, searchInput, setSearchInput, quitarAcentos}) {
  return (
    <>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} quitarAcentos={quitarAcentos}/>
        <ArtistsList datajson={datajson}/>
    </>
  )
}


Home.propTypes={
  datajson:PropTypes.array,
  setSearchInput:PropTypes.func,
  searchInput:PropTypes.string,
  quitarAcentos:PropTypes.func
}

export default Home