import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class Chef extends Component {
  constructor(props){
    super()
  }
  render(){
    return(
        <div className="container">
        <div className="detail portfolio"><h1><Link to="/">Web </Link><Link to="/aws">AWS </Link><Link to="/chef">Chef </Link></h1><br/></div>
          <br/><h1>CHEF content here</h1>
        </div>
    )
  }
}

export default Chef
