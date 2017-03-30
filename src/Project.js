import React, { Component } from 'react'

class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      project: this.props.location.selectedProject
    }
  }
  render(){
    console.log(this.props);
    console.log(this.state);
    return(
      <div>
        {this.props.selectedProject.name}
        // {this.props.project.site}
        // {this.props.project.repo}
        // {this.props.project.about}
      </div>
    )
  }
}

export default Project
