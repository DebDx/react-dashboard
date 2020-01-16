import React, {Component} from 'react';
import logo from './logo.svg';
import Chart from './Chart.js';
import Chart1 from './Chart1.js';
import Chart2 from './Chart2.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        
               
        
      </div>
      <div className="chrt">
      <div className="d1">
      <Chart2 />
      </div>
      <br></br>
      <div className="d2">
      <Chart />
      </div>
       </div>
       <div className="chrt1">
       <div className="d3">
          <Chart1 />
        </div>
        <br></br>
        <div className="d4">
          <Chart1 />
          </div>
        </div>
     
</div>
      
    
  );
}

export default App;
