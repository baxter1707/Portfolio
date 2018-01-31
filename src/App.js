import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div className ='homePage'>
        <div className="homeHeader">
          <h1>Full-Stack Developer</h1>
        </div>

        <div className= 'homeCity'>
          <h3>Houston, Texas</h3>
        </div>
      </div>
    )
  }
}

export default App;
