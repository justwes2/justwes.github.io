import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import profile from '../public/profile.jpg'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="Home">
          <div className="Home-header">
            <img src={profile} className="Home-logo" alt="profile" />
            <div>
              <h1>Wes Coffay</h1>
              <h3>Apprentice Web Developer</h3>
              <nav>
                <div className='navOp'><Link to="/">Home </Link></div>
                <div className='navOp'><Link to="/contact">Contact </Link></div>
              </nav>
            </div>
          </div>
          <main>
            <Route
              exact path='/'
              render={() => {
                return(
                  <div className="portfolio">
                    <a href="https://justwes2.github.io/ga-project-1/">
                      <div className='project' id='towers'>
                      </div>
                    </a>
                    <a href="https://wellnyss.herokuapp.com/">
                      <div className='project' id='wellnyss'>
                      </div>
                    </a>
                    <a href="https://laurkgol.github.io/Front_End_Link_Proj_3/#/">
                      <div className='project' id='link'>
                      </div>
                    </a>
                    <div className='project'>
                      Coming Soon!
                    </div>
                  </div>
                )
              }}
            />
            <Route
              path='/contact'
              render={() => {
                return(
                  <div className="portfolio">
                    <div className="contact">
                      <div className="bio">
                        <h4>Where to find me</h4>
                        <ul>
                          <li>LinkedIn</li><br/>
                          <li>Github</li><br/>
                          <li>Or email me at wes.coffay[a]gmail.com</li>
                        </ul>
                      </div>
                      <div className="bio">
                        <p>I am a web developer firmly grounded in user – centered planning. I approach projects like I approach client treatment plans – I work with the client to isolate not just the problem, but the strengths, preferences, and background. I want to solve the underlying problem, not just the coding challenges.</p>
                      </div>
                    </div>
                  </div>
                )
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default Home;
