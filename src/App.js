import React from 'react';
import './styles.css'
import {Starting} from './starting'
var photo = require('./assets/img.JPG')

function App() {
  return (
     <div className = "container">
        <h1>Hello World</h1>
        <h1>Hello Screen</h1>
        <h1>Hello Bharti</h1>
        <div>
          {/* <Starting/> */}
        <Starting  MyPhoto={photo}/>
        
        </div>
        </div>
         );
  
}

export default App;
