import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class AboutMe extends Component {
  render(){
    return(
    <div className='entireAboutMe'>
      <div className='aboutMeContainer'>
        <div className='aboutMeBio'>
          <p> I have a background in Home Automation, Networking, and Audio/Visual. I have always had an interest in technology, and software development is a challenging and fun to learn progression. I went to college to be a Music Education Major, and have over 15+ years experience as a Percussionist. I also enjoy the outdoors and some of those hobbies are Fishing, Ultimate Frisbee, and Kayaking.  </p>
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
            <label>REACT </label>
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
