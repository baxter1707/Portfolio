import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class AboutMe extends Component {
  render(){
    return(
      <div className='aboutMeContainer'>
        <div className='aboutMeBio'>
          <p> I have a background in Home Automation, Networking, and Audio/Visual. I have always had an interest in technology, and software development is a challenging and fun to learn progression. I went to college to be a Music Education Major, and have over 15+ years as a Percussionist. I also enjoy the outdoors and some of those hobbies are Fishing, Ultimate Frisbee, and Kayaking.  </p>
        </div>

        <div className="aboutMePicDiv">
          <img src = 'http://www.sandiegovips.com/wp-content/uploads/2014/05/test-image.jpeg' />
        </div>
      </div>
    )
  }
}
