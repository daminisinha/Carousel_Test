import React, { Component } from 'react';

// Navigate button component
class NavigateButton extends Component {

    render() {
        let {buttonText,onClickHandler} = this.props;
        return (
                <button name={buttonText} onClick={onClickHandler} >{buttonText}</button>
        );
    }
}

export default NavigateButton;