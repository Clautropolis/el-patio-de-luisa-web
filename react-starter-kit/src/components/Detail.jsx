import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import '../styles/Detail.scss'; 


function Detail({getArtistInfo, searchInput, setSearchInput}) {

  const {artistId} = useParams();
  const ArtistData = getArtistInfo(artistId);

  if(!ArtistData) {
    return <p>El artista que buscas no existe.</p>
  }

  const videoId = ArtistData.link.split('/').pop().split('?')[0];

  const handleBack = () => {
    setSearchInput(searchInput)
  };

  return (
    <div>
      <Link to={'/'}>
        <button className="back-button" onClick={handleBack}><i className="fa-solid fa-arrow-left"></i>Volver</button>
      </Link>
      <article className="detail">
        <h3 className="detail-title">{ArtistData.name}</h3>

        <iframe className="detail-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={ArtistData.name}
        ></iframe>

        <p className="detail-desc">{ArtistData.description}</p>
      </article>
    </div>
  )
}

Detail.propTypes={
  ArtistData:PropTypes.object,
  getArtistInfo:PropTypes.func,
  setSearchInput:PropTypes.func,
  searchInput:PropTypes.string
}

export default Detail