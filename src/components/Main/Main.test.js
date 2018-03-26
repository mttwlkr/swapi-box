import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main.js';
import { mockCards, mockCleanFilmData } from '../../cleaners/mocks.js';

describe('Main', () => {

  let wrapper, cards, mockControlFunction;

  beforeEach(() => {
    mockControlFunction = jest.fn();
    wrapper = shallow(<Main 
      cards={mockCards} 
      scroll={mockCleanFilmData}
      controlFunction={mockControlFunction}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the cards if there are cards as props', () => {
    expect(wrapper.find('.card-div').length).toEqual(1);
    expect(wrapper.find('.scroll-div').length).toEqual(0);
  });

  it('should render the scroll if there are no cards as props', () => {
    cards = [];
    mockControlFunction = jest.fn();
    wrapper = shallow(<Main 
      cards={cards} 
      scroll={mockCleanFilmData}
      controlFunction={mockControlFunction}
    />);
    expect(wrapper.find('.scroll-div').length).toEqual(1);
    expect(wrapper.find('.card-div').length).toEqual(0);
  });
});
