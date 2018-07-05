import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Card from './Card'
import profile from '../public/profile2.jpg'
import Tiles from './Tiles'
import Project from './Project'
import Script from './Script'
import Resume from './Resume'
import Chef from './Chef'
import Bio from './Bio'
import Aws from './Aws'
import projectData from '../data/project-data.json'
import scriptData from '../data/script-data.json'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      projects: projectData,
      scripts: scriptData
    }

  }
  render() {
    return (
      <Router>
        <div className="Home">
          <Card />
          <div className="Home-header">
            <img src={profile} className="Home-logo" alt="profile" />
            <div>
              <h1 className="nameLogo">Wes Coffay</h1>
              <h3>Cloud Native Developer and DevOps Engineer</h3>
              <h4>Pronounced \ ˈkȯ-fē , ˈkä- \ </h4>
              <h4>Just like the drink (but with higher caffeine content)</h4>
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
              exact path='/chef'
              render={() => {
                return(
                  <Chef />
                )
              }}
            />
            <Route
              exact path='/aws'
              render={() => {
                return(
                  <Aws />
                )
              }}
            />
            <Route
              path='/script/:key'
              component = {Script}
            />
            <Route
              path='/project/:key'
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
                  <Bio />
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
