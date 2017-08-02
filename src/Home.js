import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import profile from '../public/profile2.jpg'
import Tiles from './Tiles'
import Project from './Project'
import Resume from './Resume'
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
          <nav>
            <div className='navOp'><Link to="/contact">About </Link></div>
            <div className='navOp'><Link to="/">My Work </Link></div>
            <div className='navOp'><Link to="/resume">Resume </Link></div>
          </nav>
          <div className="Home-header">
            <img src={profile} className="Home-logo" alt="profile" />
            <div>
              <h1 className="nameLogo">Wes Coffay</h1>
              <h3>Web Developer</h3>
              <h4>I am a web developer firmly grounded in user – centered planning. I approach projects like I approach client treatment plans – I work with the client to isolate not only the problem, but the strengths, preferences, and background. I want to solve the underlying problem, not just the coding challenges.</h4>
            </div>
          </div>
          <main>
            <Route
              exact path='/'
              render={() => {
                return(
                  <Tiles />
                )
              }}
            />
            <Route
              path='/projects/:key'
              component = {Project}
            />
            <Route
              path='/resume'
              render={() => {
                return(
                  <Resume />
                )
              }}
            />
            <Route
            path='/contact'
            render={() => {
              return(
                <div className="container">
                <div className="contact">
                <div className="bio">
                <h4>Where to find me</h4>
                <ul>
                <li><a href="https://www.linkedin.com/in/wes-coffay-4027b040">My LinkedIn</a></li><br/>
                <li><a href="https://github.com/justwes2">My Github</a></li><br/>
                <li>Or email me at wes.coffay[a]gmail.com</li>
                </ul>
                </div>
                <div className="bio">
                  <h4>About Me</h4>
                  <p>I’m a web developer who loves working with both Javascript and Ruby libraries and frameworks. I found programming as a vocation where I can solve problems, both by creating apps that are effective, and by hunting down bugs and errors in code. I recently completed General Assembly's Web Development Immersive. I have deployed applications with React and Angular front ends, used both SQL and MongoDB for data storage, and am hungry for new technology to learn. <br/><br/>
                  Prior to pivoting into coding, I worked in mental health. Working as a house counselor, a rehab group facilitator, and most recently, a homeless outreach case manager, I worked with individuals experiencing severe mental illness, like schizophrenia, bipolar, and major depression, to achieve their goals.  </p>
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
