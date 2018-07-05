import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PortNav from './PortNav'

class Bio extends Component {
  constructor(props){
    super()
  }
  render(){
    return(
      <div className="container">
      <div className="contact">
      <div className="bio">
      <h4>Where to find me</h4>
      <ul>
      <li><a href="https://www.linkedin.com/in/wes-coffay-4027b040">My LinkedIn</a></li><br/>
      <li><a href="https://github.com/justwes2">My Github</a></li><br/>
      <li>Or email me at wes [a] coffay.haus</li>
      </ul>
      </div>
      <div className="bio">
        <h4>About Me</h4>
        <p>I got tired of being told to get my head out of the clouds. </p>
        <p>Now, I work, play and live in them. I love leveraging cloud services to design cost effective, scalable, low-to-no-ops applications. I’ve worked with small businesses in front end development and in large government enterprise cloud migration and management. Whatever your challenge, I’d love to work with you to find a way for us to apply cloud technologies to make your life easier. </p>

        <p>After working in homeless outreach case management, I moved into tech as a way to affect more lives. After working freelance for a while with local artists and businesses, I started working with a small startup in DC. While I was there, I got certified in AWS as an Associate Developer, Solutions Architect, and SysOps Administrator. I was staff at a federal agency supporting a large cloud automation and migration effort. My current playground is Chef- I have the Chef Fluency and Local Cookbook Development badges. </p>
      </div>
      </div>
      </div>

    )
  }
}

export default Bio
