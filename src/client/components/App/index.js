import React, { Component,Fragment } from 'react';
import Header from '../Header'
import Carousel from '../Carousel'
import { getImages } from '../../../server/api/api';
import './index.scss'

//App Component (Parent Component)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { images: null }
    }

    componentDidMount() {
        let self = this;
        //Sending 6 images
        getImages()
            .then((results) => {
                self.setState({ images: results.slice(0, 6) })
            })
    }
    render() {
        let images = this.state.images;
        return (
            <Fragment>
                <Header />
                {images && images.length > 0 && <Carousel images={this.state.images} />}
            </Fragment>
        );
    }
}

export default App;