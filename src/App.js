import React, { useState } from 'react';
import './styles/Normalize.css';
import './styles/index.scss';
import WOW from 'wowjs';

import Navbar from './compenents/Navbar';
import Home from './compenents/Home';
import About from './compenents/About';
import Projects from './compenents/Projects';
import Skills from './compenents/Skills';
import Contact from './compenents/Contact';
import Footer from './compenents/Footer';

export const jumpingContext = React.createContext();
const wow = new WOW.WOW();
wow.init();

function App() {
  const [isJumping, setIsJumping] = useState(false);

  return (
    <jumpingContext.Provider value={{isJumping, setIsJumping}}>
      <div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </jumpingContext.Provider>
  );
}

export default App;
