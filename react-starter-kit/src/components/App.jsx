
//import '../styles/App.scss'

import Contact from "./Contact";
import Detail from "./Detail";
import Events from "./Events";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import KnowUs from "./KnowUs";
import {Route, Routes} from "react-router-dom"

function App() {

  return (
      <>
        
        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />}/>
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
