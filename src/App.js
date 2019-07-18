import React from 'react';
import { Button } from 'antd';
import Section from './components/Section'

import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      
      <Section height="100vh" customStyle={{ backgroundColor:"gray" }}>
        
        <Button>top left</Button>

        <Button>bottom left</Button>

      </Section>

    </div>
  );
}

export default App;
