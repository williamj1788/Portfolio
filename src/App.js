import React from 'react';
import './styles/Normalize.css';
import './styles/index.scss';
import WOW from 'wowjs';

import Navbar from './compenents/Navbar';
import Home from './compenents/Home';
import About from './compenents/About';
import Projects from './compenents/Projects';

class App extends React.Component{
  constructor(props){
    super(props);
    const wow = new WOW.WOW();
    wow.init();
  }
  
  render(){
    return (
      <div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
        </main>
      </div>
    );
  }
}

export default App;
