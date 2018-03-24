import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const heightAdjust = {

}

export class Projects extends Component {
  render(){
    return(
<div style = {heightAdjust} className='projectContainer'>
  <div className='project'>
        <div className='projectInfo'>
          <div className='projectTitle'>
            <h3> Beaudemy </h3>
          </div>
          <div className = 'projectText'>
            <p>A learning portal for beauty professionals to continue their education. The site allows for licensed beauty professionals to sign up and upload education courses made by them! It also allows for licensed beauty students to sign up, view, and save courses from their favorite educators to continue their education!</p>
          </div>
          <div className = 'techLabels'>
            <label> React </label>
            <label> Redux </label>
            <label> CSS </label>
            <label> Node.JS</label>
            <label> Express </label>
            <label> Postgres </label>
            <label> Sequelize </label>
            <label> HTML/CSS </label>
          </div>
          <div className = "project-link-container">
            <div className = 'projectLink'>
              <Link to = 'https://github.com/baxter1707/beaudemyFrontend.git' target ='_blank' className='gitButton'>GitHub </Link>

            </div>
            <div className='project-video-link'>
              <Link to = 'https://youtu.be/Cl_Cypw3wzw' target ='_blank' className='video-demo-button'> Video Demo</Link>
            </div>
          </div>
        </div>

        <div className = 'projectImage'>
        <img src="http://res.cloudinary.com/msbcloud/image/upload/v1521078512/Beaudemy_Logo.jpg" />
        </div>
  </div>






  <div className ='project'>
        <div className='project-image-2'>
          <img src="http://res.cloudinary.com/msbcloud/image/upload/v1521695024/HoneyTree.png" />
        </div>

        <div className='project-info-2'>
        <div className='projectTitle'>
          <h3>The Honey Tree </h3>
        </div>
        <div className = 'projectText'>
          <p>An ecomerce site that sells honey, candies, and accessories. The sites front end was built using React and Redux, while the backend and inventory database was created with Postgres and Sequelize. Payment processing was handled via the Stripe API. </p>
        </div>
        <div className = 'techLabels'>
          <label> HTML/CSS </label>
          <label> Postgres </label>
          <label> Sequelize </label>
          <label> React</label>
          <label> Redux</label>
          <label> Node.JS </label>
          <label> Express </label>
        </div>
        <div className = "project-link-container">
          <div className = 'projectLink'>
            <Link to = 'https://github.com/baxter1707/honeytreeFrontEnd.git' target ='_blank' className='gitButton'>GitHub </Link>
          </div>
          <div className='project-video-link'>
            <Link to = 'https://youtu.be/JcAA1G13oKc' target ='_blank' className='video-demo-button-2'> Video Demo</Link>
          </div>
        </div>
        </div>
  </div>


  <div className ='project'>

        <div className='project-info-3'>
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

        </div>
        </div>

        <div className='project-image-3'>
          <img src="https://preview.ibb.co/idch8m/Pokedex_App.png" />
        </div>
  </div>





</div>
    )
  }
}
