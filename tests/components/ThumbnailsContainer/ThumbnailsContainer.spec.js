import React from 'react';
import ThumbnailsContainer from '.../../../src/client/components/ThumbnailsContainer'
import {shallow} from 'enzyme';

test('Thumbnail renders',()=>{
    let images = [1,2,3,4,5,6]
    const component = shallow(<ThumbnailsContainer images={images}/>); 
    expect(component).toMatchSnapshot();
})
