import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {

  let mockControlFunction;
  let wrapper;

  beforeEach(() => {
    mockControlFunction = jest.fn()
    wrapper = shallow(<Nav controlFunction={mockControlFunction}/>)    
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke the props control function when a button is clicked', () => {
    wrapper.find('.people-button').simulate('click')
    expect(mockControlFunction).toHaveBeenCalled()
  })
})
