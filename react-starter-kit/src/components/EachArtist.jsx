import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import '../styles/EachArtist.scss';

function EachArtist({infoArtist}) {

  return (
    <article key={infoArtist.id} className="artist">
      <Link className="artist-link artist">
        <img src={infoArtist.image} alt={infoArtist.name} className="artist-image"/>
        <h3 className="artist-title">{infoArtist.name}</h3>
        <p className="artist-desc">{infoArtist.description}</p>
      </Link>
    </article>
  )
}

EachArtist.propTypes={
  infoArtist:PropTypes.object
}

export default EachArtist