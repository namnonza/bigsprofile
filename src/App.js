import React from 'react';
import { Button } from 'antd';
import Section from './components/Section'
import Navbar from './Navbar'

import './resources/css/main.css';
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      
      {/* main section for image */}
      <Section height="100vh" customClass="main-section">

        {/* image overlay */}
        <div className="Overlay-container" />
        
        {/* top left section */}
        <div style={{ top:"10px" , left:"10px" , position:"absolute" }}>
          <Navbar />
        </div>

        {/* bottom left section */}
        <div style={{ bottom:"10px" , left:"10px" , position:"absolute" , textAlign:"left" }} >
          <p>i'm big</p>
          <p> i'm fuck up </p>
        </div>

      </Section>

      <Section height="100vh" customStyle={{ backgroundColor:"black" }}>

        what's up

      </Section>

    </div>
  );
}

export default App;
