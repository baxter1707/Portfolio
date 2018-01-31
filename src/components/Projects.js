import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Projects extends Component {
  render(){
    return(
      <div className='projectContainer'>
        <div className='projectInfo'>
          <div className='projectTitle'>
            <h3> Pokedex </h3>
          </div>
          <div className = 'projectText'>
            <p>Web app that mimics a Pokemon Pokedex. Allows searching of pokemon, and adding pokemon to a specific users list of favorites. Was built using Postgres, Sequelize, and Mustache Server side pages. </p>
          </div>
          <div className = 'techLabels'>
            <label> HTML/CSS </label>
            <label> Postgres </label>
            <label> Sequelize </label>
            <label> Mustache</label>
            <label> Node.JS </label>
            <label> Express </label>
          </div>
          <div className = 'projectLink'>
            <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='gitButton'>GitHub </Link>
          </div>
        </div>

        <div className = 'projectImage'>
        <img src="https://preview.ibb.co/idch8m/Pokedex_App.png" />
        </div>
      </div>
    )
  }
}
