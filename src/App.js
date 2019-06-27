import React from 'react';
import './styles/Normalize.css';
import './styles/index.scss';
import WOW from 'wowjs';
import Scroll from 'smooth-scroll';

import Navbar from './compenents/Navbar';
import Home from './compenents/Home';
import About from './compenents/About';
import Projects from './compenents/Projects';
import Skills from './compenents/Skills';
import Contact from './compenents/Contact';
import Footer from './compenents/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    const wow = new WOW.WOW();
    wow.init();
    const scroll = new Scroll('a[href*="#"]',{
      speed: 1000,
      speedAsDuration: true,
    });

  }
  
  render(){
    return (
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
    );
  }
}

export default App;
