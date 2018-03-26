import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Header', () => {

  let wrapper, controlFunction;

  beforeEach( () => {
    controlFunction = jest.fn();
    wrapper = shallow(<Header 
      controlFunction={controlFunction} 
      value={[1, 2, 3]}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});