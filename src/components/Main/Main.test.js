import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main.js';
import { mockCleanCardData, mockCleanFilmData } from '../../cleaners/mocks.js'

describe('Main', () => {

  let wrapper, cards, scroll, mockControlFunction 

  beforeEach(() => {
    cards = mockCleanCardData;
    scroll = mockCleanFilmData;
    mockControlFunction = jest.fn()
    wrapper = shallow(<Main 
      cards={mockCleanCardData} 
      scroll={mockCleanFilmData}
      controlFunction={mockControlFunction}
    />)
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should render the scroll if there is no cards coming through', () => {
    wrapper = shallow(<Main 
      cards={mockCleanCardData} 
      scroll={mockCleanFilmData}
      controlFunction={mockControlFunction}
    />)
    console.log(wrapper.debug())
    expect(wrapper.find('scroll-div').length).toEqual(1)
  })
})
