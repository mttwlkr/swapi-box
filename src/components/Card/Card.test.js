import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card.js';
import { mockCleanCardData } from '../../cleaners/mocks.js'

describe('Card', () => {

  it('should render without crashing', () => {
    const controlFunction = jest.fn()
    shallow(<Card card={mockCleanCardData} controlFunction={controlFunction}/>)
  })

  it.skip('should match the snapshot', () => {
    const controlFunction = jest.fn()
    const wrapper = shallow(<Card card={mockCleanCardData} controlFunction={controlFunction}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should create new cards for every element but the name card', () => {
    const controlFunction = jest.fn()
    const wrapper = shallow(<Card card={mockCleanCardData} controlFunction={controlFunction}/>)
    expect(wrapper.find('p').length).toEqual(3)
  })

})
