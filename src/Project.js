import React, { Component } from 'react'

class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      project: this.props.location
    }
  }
  render(){
    console.log(this.props);
    console.log(this.state);
    return(
      <div className="portfolio">
        {this.props.project}

      </div>
    )
  }
}

export default Project
