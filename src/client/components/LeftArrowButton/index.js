import React, { Component } from 'react';
import './index.scss'

//Left arrow button component
export default class LeftArrowButton extends Component { 
  render() {
    return (
      <img onClick={this.props.prevImage} alt="Left Arrow" width="20" height="20" className="carousel__left__arrow" src="./images/arrow.svg" alt="Left Arrow"/>
    );
  }
}

