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
                <Link to="/">Home </Link>
                <Link to="/contact">Contact </Link>
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
                  <p>Scuttle Yellow Jack gaff Jack Tar parley Cat onine tails pink weigh anchor skysail bilge rat.</p>
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
