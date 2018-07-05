import React, { Component } from 'react'
import data from '../data/project-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PortNav from './PortNav'

class Tile extends Component {
  constructor(props){
    super()
  }
  render(){
    let tiles = data.map(function(a) {
      let url = '/project/'+a.symbol
      let alias ='project_'+a.symbol
      if(a.symbol%2==1){
        return (
            <div className="portfolio">

              <div className='project' id={alias}>
              </div>
              <div className='detail'>
                <Link
                to={{
                  pathname: url,
                  state: {selectedProject: a}
                }}
                key={a.symbol}>
                <p className='titleLogo'>{a.name}</p>
                </Link>
                <p><a className='projectAnchor' href={a.site}>Check it out</a></p>
                <p><a className='projectAnchor' href={a.repo}>See the code</a></p>
                <p>Technologies used: {a.tech}</p>
                <p>{a.about}</p>
              </div>
            </div>
        )
      } else {
        return (
            <div className="portfolio">
              <div className='detail'>
              <Link
              to={{
                pathname: url,
                state: {selectedProject: a}
              }}
              key={a.symbol}>
              <p className='titleLogo'>{a.name}</p>
              </Link>
                <p><a className='projectAnchor' href={a.site}>Check it out</a></p>
                <p><a className='projectAnchor' href={a.repo}>See the code</a></p>
                <p>Technologies used: {a.tech}</p>
                <p>{a.about}</p>
              </div>
              <div className='project' id={alias}>
              </div>
            </div>
        )
      }
    })
    return(
        <div className="container">
        
          {tiles}
        </div>
    )
  }
}

export default Tile
