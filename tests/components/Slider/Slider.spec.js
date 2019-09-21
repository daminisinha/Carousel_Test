import React from 'react';
import Slider from '../../../src/client/components/Slider'
import {shallow} from 'enzyme';

test('Slider renders',()=>{
    let image ={
        tags :0
    }
    const component = shallow(<Slider image ={image.tags}/>); 
    expect(component).toMatchSnapshot();
})
