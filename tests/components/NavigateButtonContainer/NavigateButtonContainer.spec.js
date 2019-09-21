import React from 'react';
import NavigateButtonContainer from '../../../src/client/components/NavigateButtonContainer'
import {shallow} from 'enzyme';

test('Navigate Button container renders',()=>{
    const component = shallow(<NavigateButtonContainer/>); 
    expect(component).toMatchSnapshot();
})
