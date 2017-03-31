import React, { Component } from 'react'

class Project extends Component {
  constructor(props){
    super(props)
    console.log(props);
    this.state={
      project: this.props.location.state.selectedProject
    }
  }
  render(){
    console.log(this.state.project);
    let alias ='project_'+this.state.project.key
    return(
      <div className="portfolio">
        <div className='project' id={alias}>
        </div>
        <div className='bio'>
        <p>{this.state.project.name}</p>
        <p><a href={this.state.project.site}>Check it out</a></p>
        <p><a href={this.state.project.repo}>See the code</a></p>
        <p>{this.state.project.about}</p>

        </div>

      </div>
    )
  }
}

export default Project
