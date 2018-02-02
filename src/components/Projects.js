import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Projects extends Component {
  render(){
    return(
<div className='projectContainer'>
  <div className='project'>
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
          <div className = "project-link-container">
            <div className = 'projectLink'>
              <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='gitButton'>GitHub </Link>
            </div>
            <div className='project-video-link'>
              <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='video-demo-button'> Video Demo</Link>
            </div>
          </div>
        </div>

        <div className = 'projectImage'>
        <img src="https://preview.ibb.co/idch8m/Pokedex_App.png" />
        </div>
  </div>






  <div className ='project'>
        <div className='project-image-2'>
          <img src="http://www.sandiegovips.com/wp-content/uploads/2014/05/test-image.jpeg" />
        </div>

        <div className='project-info-2'>
        <div className='projectTitle'>
          <h3> PROJECT 2 </h3>
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
        <div className = "project-link-container">
          <div className = 'projectLink'>
            <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='gitButton'>GitHub </Link>
          </div>
          <div className='project-video-link'>
            <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='video-demo-button-2'> Video Demo</Link>
          </div>
        </div>
        </div>
  </div>


  <div className ='project'>

        <div className='project-info-3'>
        <div className='projectTitle'>
          <h3> PROJECT 3 </h3>
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
        <div className = "project-link-container">
          <div className = 'projectLink'>
            <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='gitButton'>GitHub </Link>
          </div>
          <div className='project-video-link'>
            <Link to = 'https://github.com/baxter1707/pokedex' target ='_blank' className='video-demo-button-3'> Video Demo</Link>
          </div>
        </div>
        </div>

        <div className='project-image-3'>
          <img src="http://www.sandiegovips.com/wp-content/uploads/2014/05/test-image.jpeg" />
        </div>
  </div>





</div>
    )
  }
}
