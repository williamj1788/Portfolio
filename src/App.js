import React from 'react';
import './styles/Normalize.css';
import './styles/index.scss';
import WOW from 'wowjs';

import Home from './compenents/Home';
import About from './compenents/About';

class App extends React.Component{
  constructor(props){
    super(props);
    const wow = new WOW.WOW();
    wow.init();
  }
  
  render(){
    return (
      <section>
        <Home />
        <About />
      </section>
    );
  }
}

export default App;
