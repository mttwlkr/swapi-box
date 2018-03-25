import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';
import { mockCleanCardData } from '../../cleaners/mocks.js'
import Button from '../Button/Button.js'

describe('Card', () => {

  let wrapper, mockControlFunction;

  beforeEach(() => {
    mockControlFunction = jest.fn()
    wrapper = shallow(<Card card={mockCleanCardData} controlFunction={mockControlFunction}/>)
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should create new cards for every element but the name card', () => {
    expect(wrapper.find('p').length).toEqual(3)
  })

  it('should invoke the control function when favorite button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(mockControlFunction).toHaveBeenCalledWith(mockCleanCardData)
  })

})
