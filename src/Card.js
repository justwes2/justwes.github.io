import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('mouseover', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('mouseover', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <nav
        onMouseOver={this.showMenu}
      >
      <div className=''>
        <Link to="/contact">About </Link>
      </div>
      <div className='' onMouseOver={this.showMenu}>
        <Link to="/">My Work </Link>
      </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
                onMouseOver={this.showMenu}
              >
                <div className=''><Link to="/">Web </Link></div>
                <div className=''><Link to="/aws">AWS </Link></div>
                <div className=''><Link to="/chef">Chef </Link></div>
              </div>
            )
            : (
              null
            )
        }
        <div className=''>
          <Link to="/resume">Resume </Link>
        </div>
      </nav>
    );
  }
}

export default Card;
