import React, { Component } from 'react';
import './index.scss'

// Right arrow button component
export default class RightArrowButton extends Component {
  render() {
    return (
       
        <img onClick={this.props.nextImage} alt="Right Arrow" width="20" height="20px" className="carousel__right__arrow float-right" height="60%" src="./images/arrow.svg" alt="Right Arrow" />
 
    );
  }
}

