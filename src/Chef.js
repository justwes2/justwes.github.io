import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PortNav from './PortNav'

class Chef extends Component {
  constructor(props){
    super()
  }
  render(){
    return(
        <div className="container">
          <PortNav />
          <div className="portfolio">
            <p>While studying for my Chef certification, I've assembled reference documentation, which you can check out below</p>
          </div>
          <div className="portfolio">
            <div className='detail'>
              <p className='titleLogo'>Chef Basic Fluency Study Guide</p>
              <p>The Chef Basic Fluency Exam covers the basic concepts and objects in the Chef ecosystem</p>
              <p><a className='projectAnchor' href='https://s3.amazonaws.com/coffay.haus/ChefFluencyStudyGuide.html'>Look at the Study Guide </a></p>
            </div>
          </div>
          <div className="portfolio">
            <div className='detail'>
              <p className='titleLogo'>Chef Local Cookbook Development Study Guide</p>
              <p>The Chef Local Cookbook Development Exam covers writing and testing cookbooks</p>
              <p><a className='projectAnchor' href='https://s3.amazonaws.com/coffay.haus/ChefLocalCookbookDevelopmentStudyGuide.html'>Look at the Study Guide </a></p>
            </div>
          </div>
          <div className="portfolio">
            <div className='detail'>
              <p className='titleLogo'>Getting Started with Chef: An Appetizer Slide Deck</p>
              <p>The slide deck for a presentation introducing Chef that was delievered at a Lunch and Learn Session</p>
              <p><a className='projectAnchor' href='https://s3.amazonaws.com/coffay.haus/Cooking+with+Chef.pdf'>Look at the Slide Deck </a></p>
            </div>
          </div>
        </div>
    )
  }
}

export default Chef
