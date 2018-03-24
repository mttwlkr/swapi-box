import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';


describe('App', () => {

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise.resolve()
    }))

  })

  it('should render without crashing', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper).toBeDefined()
  })

  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should invoke the handleFetch method with different arguments', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    const mockEvent = {target: {name: 'vehicles'}}
    const handleFetch = jest.fn()
    const parseFunc = jest.fn()
    const getAPI = jest.fn()
    wrapper.instance().handleClick(mockEvent)

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise.resolve()
    }))

    console.log(wrapper.debug())
    expect(wrapper.instance().handleFetch()).toHaveBeenCalled()
  })
})
