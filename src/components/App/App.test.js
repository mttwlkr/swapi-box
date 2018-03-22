import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';

describe('App', () => {

  it.skip('should render without crashing', () => {
    shallow(<App />)  
  })

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
