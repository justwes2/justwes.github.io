import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class PortNav extends Component {
  constructor(props){
    super()
  }
  render(){
    return(
        <div className="container">
          <div className="detail portfolio">

            <h1><Link to="/">Web </Link></h1>
            <h1><Link to="/aws">AWS </Link></h1>
            <h1><Link to="/chef">Chef </Link></h1>

          </div>
        </div>
    )
  }
}

export default PortNav
