import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class AboutMe extends Component {
  render(){
    return(
    <div className='entireAboutMe'>
      <div className='aboutMeContainer'>
        <div className='aboutMeBio'>
          <p> Michael Baxter's tech industry journey began when he was just a child. His parents tell stories of him fixing the TV, home computer, and being curious of any electronic placed in front of him. Transitioning from music education, Michael began his tech career specializing in home automation, networking, and audio/visual components. His interest in the industry continued to grow as he was constantly researching fun and new software solutions. In 2017, Michael dove into software development leaving. 'I enjoy the challenge coding brings', Michael says. 'It's fun and rewarding to continue learning in this ever progressing industry'. </p>

          <p>

          In his free time, he enjoys life's adventures with his wife, AnneMarie, and doggo, Serenity. You can often find him enjoying the outdoors rather he is fishing, kayaking, or playing Ultimate Frisbee. Michael still utilizes his music background as a Percussionist, with over 15 years experience, by playing duets with his wife.  </p>
        </div>

        <div className="aboutMePicDiv">
          <img className='profilepicture' src = 'https://image.ibb.co/fXfh1H/003.jpg' />
        </div>
      </div>
      <div className='technologies'>
        <div className='knowContainer'>
          <div className='whatIknow'>
            WHAT I KNOW
          </div>
          <div className='icon'>

            <div className='skill-icon'>
              <label>ATOM </label>
              <i className="devicon-atom-original"></i>
            </div>
            <div className='skill-icon'>
              <label>BOOTSTRAP </label>
              <i className="devicon-bootstrap-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>CSS </label>
              <i className="devicon-css3-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>GITHUB </label>
              <i className="devicon-github-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>HTML5 </label>
              <i className="devicon-html5-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>JAVASCRIPT </label>
              <i className="devicon-javascript-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>JQUERY </label>
              <i className="devicon-jquery-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>NODE.JS </label>
              <i className="devicon-nodejs-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>POSTGRESQL </label>
              <i className="devicon-postgresql-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>PYTHON </label>
              <i className="devicon-python-plain"></i>
            </div>
            <div className='skill-icon'>
              <label>SEQUELIZE </label>
              <i className="devicon-sequelize-plain"></i>
            </div>

          </div>
        </div>

        <div className='learnedContainer'>
          <div className='learning'>
            WHAT I AM LEARNING
          </div>
          <div className='icon'>

          <div className='skill-icon'>
            <label>AMAZON </label>
            <i className="devicon-amazonwebservices-original"></i>
          </div>
          <div className='skill-icon'>
            <label>MONGODB </label>
            <i className="devicon-mongodb-plain"></i>
          </div>
          <div className='skill-icon'>
            <label>REACT/REDUX </label>
            <i className="devicon-react-original"></i>
          </div>
          <div className='skill-icon'>
            <label>SASS </label>
            <i className="devicon-sass-original"></i>
          </div>

          </div>
        </div>

      </div>
    </div>
    )
  }
}
