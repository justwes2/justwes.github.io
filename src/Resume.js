import React from 'react';

import image from "../public/CoffayResume.png"

class Resume extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="canvasContainer">
        <img src={image} alt="resume" />

      </div>
    )
  }
}

module.exports = Resume;
