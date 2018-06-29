import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PortNav from './PortNav'

class Aws extends Component {
  constructor(props){
    super()
  }
  render(){
    return(
        <div className="container">
        <PortNav />
          <br/><h1>AWS content here</h1>
        </div>
    )
  }
}

export default Aws
