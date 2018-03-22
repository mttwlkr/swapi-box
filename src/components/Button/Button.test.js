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

  it('should run the props controlFunction on click', () => {
    const controlFunction = jest.fn()
    let wrapper = shallow(<Button controlFunction={controlFunction}/>)
    wrapper.simulate('click')
    expect(controlFunction).toHaveBeenCalled()
  })
})
