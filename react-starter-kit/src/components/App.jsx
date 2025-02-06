
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
        <header>
          <Header />
        </header>

        <main>

          <Routes>

          
            <Home />
            <Contact />
            <Events />
            <KnowUs />
            <Detail />
          </Routes>

        </main>

        <footer>
          <Footer/>
        </footer>
      </>
    
  );
}

export default App
