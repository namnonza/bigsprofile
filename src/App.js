import React from 'react';
import { Button } from 'antd';
import Section from './components/Section'

import './resources/css/main.css';
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      
      <Section height="100vh" customStyle={{ backgroundColor:"gray" }}>
        
        <div style={{ top:"10px" , left:"10px" , position:"absolute" }}>
          top left
        </div>

        <div style={{ bottom:"10px" , left:"10px" , position:"absolute" }} >
          bottom left
        </div>

      </Section>

    </div>
  );
}

export default App;
