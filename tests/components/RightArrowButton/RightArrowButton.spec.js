import React from 'react';
import RightArrowButton from '../../../src/client/components/RightArrowButton'
import {shallow} from 'enzyme';

test('Right arrow button renders',()=>{
    const component = shallow(<RightArrowButton/>); 
    expect(component).toMatchSnapshot();
})
