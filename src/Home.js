import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import profile from '../public/profile.jpg'
import Tiles from './Tiles'
import Project from './Project'
import data from '../data/project-data.json'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      projects: data
    }
  }
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
              exact path='/portfolio_page/'
              render={() => {
                return(
                  <Tiles />
                )
              }}
            />
            <Route
              path='/portfolio_page/projects/:key'
              component = {Project}
            />
            <Route
            path='/portfolio_page/contact'
            render={() => {
              return(
                <div className="portfolio">
                <div className="contact">
                <div className="bio">
                <h4>Where to find me</h4>
                <ul>
                <li><a href="https://www.linkedin.com/in/wes-coffay-4027b040">LinkedIn</a></li><br/>
                <li><a href="https://github.com/justwes2">Github</a></li><br/>
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
          <footer>
          <p>Built on React <img src={logo} className="App-logo" alt="logo" /> <a href="https://github.com/justwes2/portfolio_page">See the code</a></p>
          </footer>
        </div>

      </Router>
    );
  }
}

export default Home;
