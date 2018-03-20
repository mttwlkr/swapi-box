import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js';

describe('CardContainer', () => {

  it('should render without crashing', () => {
    shallow(<CardContainer />)  
  })

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<CardContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
