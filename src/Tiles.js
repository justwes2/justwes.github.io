import React, { Component } from 'react'
import data from '../data/project-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class Tile extends Component {
  constructor(props){
    super()
  }
  render(){
    let tiles = data.map(function(a) {
      let url = '/projects/'+a.key
      let alias ='project_'+a.key
      return (

        <Link
          to={{
            pathname: url,
            state: {selectedProject: a}
          }}
          key={a.key}>
          <div className='project' id={alias}>
            <h4 className='title'>{a.name}<br/>Click for more info</h4>
          </div>
        </Link>
      )
    })
    return(

        <div className="portfolio">
          {tiles}
        </div>

    )
  }
}

export default Tile
