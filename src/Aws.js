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
      let url = '/script/'+a.symbol
      return(
          <div className="portfolio">
            <div className='detail'>
            <Link
            to={{
              pathname: url,
              state: {selectedScript: a}
            }}
            key={a.symbol}>
            <p className='titleLogo'>{a.title}</p>
            </Link>
              <p>{a.header}</p>
            </div>
          </div>
      )
    })
    return(
      <div className="container">
        
        {scripts}
      </div>
    )
  }
}

export default Aws
