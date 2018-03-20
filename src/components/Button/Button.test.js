import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {

  it('should render without crashing', () => {
    shallow(<Button />)  
  })

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
})
