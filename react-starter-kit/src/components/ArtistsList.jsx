import EachArtist from "./EachArtist";
import PropTypes from "prop-types"
import '../styles/ArtistsList.scss'



function ArtistsList({datajson}) {

  if (datajson.length === 0) {
    return <p className="not-found">Ningún artista coincide con tu búsqueda.</p>
  }

  const artistsHtml = datajson.map((oneArtist) => (
    <EachArtist key={oneArtist.id} infoArtist={oneArtist}/>
  ))

  return (
    <>
        <section className="main-artistas">
          {artistsHtml}
        </section>
    </>
  )
}

ArtistsList.propTypes={
  datajson:PropTypes.array
}

export default ArtistsList