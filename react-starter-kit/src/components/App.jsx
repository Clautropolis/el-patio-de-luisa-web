
import '../styles/App.scss';
import Contact from "./Contact";
import Detail from "./Detail";
import Events from "./Events";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import KnowUs from "./KnowUs";
import {Route, Routes} from "react-router-dom";
import datajson from "../services/dataArtists.json";
import { useState } from 'react';

function App() {

  const [menuStatus, setMenuStatus] = useState('');


  return (
      <>
        
        <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus}/>

        <main>

          <Routes>
            <Route path="/" element={<Home datajson={datajson}/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/knowus" element={<KnowUs />}/>
            <Route path="/artist/:artistId" element={<Detail />}/>
            
          </Routes>

        </main>

        
          <Footer/>
       
      </>
    
  );
}

export default App
