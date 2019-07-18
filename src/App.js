import React from 'react';
import { Button } from 'antd';
import Section from './components/Section'

import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      
      <Section height="100vh" customStyle={{ backgroundColor:"gray" }}>
        
        <Button style={{ top:"10px" , left:"10px" , position:"absolute" }}>
          top left
        </Button>

        <Button style={{ bottom:"10px" , left:"10px" , position:"absolute" }} >
          bottom left
        </Button>

      </Section>

    </div>
  );
}

export default App;
