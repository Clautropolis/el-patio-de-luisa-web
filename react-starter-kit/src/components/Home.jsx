import ArtistsList from "./ArtistsList";
import Search from "./Search";
import PropTypes from "prop-types"


function Home({datajson}) {
  return (
    <>
        <Search />
        <ArtistsList datajson={datajson}/>
    </>
  )
}


Home.propTypes={
  datajson:PropTypes.array
}

export default Home