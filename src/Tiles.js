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



          <div className="portfolio">
            <div className='project' id={alias}>
            </div>
            <div className='bio'>
            <p>{a.name}</p>
            <p><a href={a.site}>Check it out</a></p>
            <p><a href={a.repo}>See the code</a></p>
            <p>{a.about}</p>

            </div>

          </div>
        
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
