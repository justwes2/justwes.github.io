import React, { Component } from 'react'
import data from '../data/script-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PortNav from './PortNav'
import EmbeddedGist from './EmbeddedGist'

class Aws extends Component {
  constructor(props){
    super()
  }
  render(){
    let scripts = data.map(function(a) {
      let url = '/aws_scripts/'+a.key
      let alias = 'project_'+a.key
      return(
          <div className="portfolio">
            <div className='detail'>
              <p className='titleLogo'>{a.title}</p>
              <p>{a.header}</p>
              <EmbeddedGist gist={a.gist} />
              <p>{a.walkthrough}</p>
            </div>
          </div>
      )
    })
    return(
      <div className="container">
        <PortNav />
        {scripts}
      </div>
    )
  }
}

export default Aws
