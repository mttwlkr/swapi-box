import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer.js';
import { mockCards } from '../../cleaners/mocks.js';

describe('CardContainer', () => {

  let controlFunction, wrapper;

  beforeEach( () => {
    controlFunction = jest.fn();
    wrapper = shallow(<CardContainer 
      cards={mockCards} 
      controlFunction={controlFunction} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the amount of cards being passed in', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  });
});