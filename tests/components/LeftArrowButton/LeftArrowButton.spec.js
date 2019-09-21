import React from 'react';
import LeftArrowButton from '../../../src/client/components/LeftArrowButton'
import {shallow} from 'enzyme';

test('Left arrow button render renders',()=>{
    const component = shallow(<LeftArrowButton/>); 
    expect(component).toMatchSnapshot();
})
