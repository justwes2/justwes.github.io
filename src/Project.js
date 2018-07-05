import React, { Component } from 'react'

class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      project: this.props.location
    }
  }
  render(){
    console.log(this.state.project.state.selectedProject.name);

    let alias ='project_'+this.state.project.state.selectedProject.symbol
    return(
      <div className="portfolio">
        <div className='project' id={alias}>
        </div>
        <div className='bio'>
        <p>{this.state.project.state.selectedProject.name}</p>
        <p><a href={this.state.project.state.selectedProject.site}>Check it out</a></p>
        <p><a href={this.state.project.state.selectedProject.repo}>See the code</a></p>
        <p>{this.state.project.state.selectedProject.about}</p>

        </div>

      </div>
    )
  }
}

export default Project
