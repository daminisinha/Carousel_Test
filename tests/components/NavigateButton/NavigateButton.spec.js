import React from 'react';
import NavigateButton from '../../../src/client/components/NavigateButton'
import {shallow} from 'enzyme';

test('Navigate button renders',()=>{
    const component = shallow(<NavigateButton/>); 
    expect(component).toMatchSnapshot();
})
