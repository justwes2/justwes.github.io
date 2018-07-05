import React, { Component } from 'react'

import EmbeddedGist from './EmbeddedGist'

class Script extends Component {
  constructor(props){
    super(props)
    this.state={
      script: this.props.location
    }
  }
  render(){
    return(
      <div className='portfolio'>
        <p className='titleLogo'>{this.props.location.state.selectedScript.title}</p>
        <p>{this.props.location.state.selectedScript.header}</p>
        <EmbeddedGist gist={this.props.location.state.selectedScript.gist} />
        <p>{this.props.location.state.selectedScript.walkthrough}</p>
      </div>

    )
  }
}

export default Script
