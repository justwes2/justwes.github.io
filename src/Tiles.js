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
      let url = '/projects/'+a.key
      let alias ='project_'+a.key
      if(a.key%2==1){
        return (
            <div className="portfolio">

              <div className='project' id={alias}>
              </div>
              <div className='detail'>
                <p className='titleLogo'>{a.name}</p>
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
                <p className='titleLogo'>{a.name}</p>
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
        <PortNav />
          {tiles}
        </div>
    )
  }
}

export default Tile
