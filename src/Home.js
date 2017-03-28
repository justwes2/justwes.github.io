import React, { Component } from 'react';

import profile from '../public/profile.jpg'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={profile} className="Home-logo" alt="profile" />
          <h1>Wes Coffay</h1>
          <h3>Apprentice Web Developer</h3>
        </div>
        <div className="portfolio">
          <a href="https://justwes2.github.io/ga-project-1/">
            <div className='project' id='towers'>
            </div>
          </a>
          <a href="https://wellnyss.herokuapp.com/">
            <div className='project' id='wellnyss'>
            </div>
          </a>
          <div className='project'>
          </div>
          <div className='project'>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
