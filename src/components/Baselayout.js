import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Baselayout extends Component {
  render() {
    return(
      <div>
      <NavBar />
        {this.props.children}
      <Footer />
      </div>
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className='navName'>
          <span> Michael Baxter </span>
        </div>

        <div className='navLinks'>
          <Link to='/' className= 'home'>Home</Link>
          <Link to = '/AboutMe' className='aboutMe'>About Me</Link>
          <Link to = 'Projects' className='projects'> Projects</Link>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">

        <div className='navLinksFooter'>
          <Link to='mailto: Michael_steven.baxter@yahoo.com' className= 'email' target= '_blank'>Email</Link>
          <Link to = 'https://github.com/baxter1707' className='gitHub' target="_blank">GitHub</Link>
          <Link to = 'https://www.linkedin.com/in/michael-baxter-b138b114b/' className='linkedin' target='_blank'> Linkedin</Link>
          <Link to = 'https://medium.com/@michael_steven.baxter' className='medium' target='_blank'> Medium</Link>
          <Link to = 'https://medium.com/@michael_steven.baxter' className='resume' target='_blank'> Resume</Link>
        </div>

        <div className = 'footerTag'>
          Portfolio Made from Scratch by Michael Baxter
        </div>
      </div>
    )
  }

}
