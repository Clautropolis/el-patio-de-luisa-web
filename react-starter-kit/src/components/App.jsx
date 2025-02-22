
import '../styles/App.scss';
import Contact from "./Contact";
import Detail from "./Detail";
import Events from "./Events";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import KnowUs from "./KnowUs";
import {Route, Routes, useParams} from "react-router-dom";
import datajson from "../services/dataArtists.json";
import { useState } from 'react';

function App() {

  const [menuStatus, setMenuStatus] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const quitarAcentos = (texto) => {
    return texto.normalize("NFD").replace(/\p{Diacritic}/gu, ""); 
  };

  const filteredArtists = datajson.filter((eachArtist) => quitarAcentos(eachArtist.name.toLowerCase()).startsWith(quitarAcentos(searchInput))
  );

  const getArtistInfo = (id) => {

    const artistFound = datajson.find((artist) => artist.id === Number(id));
    
    return artistFound;
  }


  return (
      <>
        
        <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus}/>

        <main>

          <Routes>
            <Route path="/" element={<Home datajson={filteredArtists} searchInput={searchInput} setSearchInput={setSearchInput} quitarAcentos={quitarAcentos}/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/knowus" element={<KnowUs />}/>
            <Route path="/artist/:artistId" element={<Detail getArtistInfo={getArtistInfo} searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
            
          </Routes>

        </main>

        
          <Footer/>
       
      </>
    
  );
}

export default App
