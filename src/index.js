import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../src/client/components/App';
export default class Root extends Component {

    render() {
        return (
            <App/>
        );
    }
}
ReactDOM.render(<Root/>,document.getElementById("app"))