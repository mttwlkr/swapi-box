import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import { cleanVehicles } from '../../cleaners/cleaner.js';

import {
  mockAPIVehicleData, 
  mockCleanCardData } from '../../cleaners/mocks.js';


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update cards state if favorite cards length', () => {
    expect(wrapper.state('cards').length).toEqual(0);
    wrapper.setState({favorites: [mockCleanCardData]});
    wrapper.instance().showFavorites();
    expect(wrapper.state('cards').length).toEqual(1);
  });

  it('should add a favorited card to favorites state array', () => {
    expect(wrapper.state('favorites').length).toEqual(0);
    wrapper.instance().handleFavorite(mockCleanCardData);
    expect(wrapper.state('favorites').length).toEqual(1);
  });

  it('should not add duplicate card to favorites state', () => {
    expect(wrapper.state('favorites').length).toEqual(0);
    wrapper.setState({favorites: [mockCleanCardData]});
    wrapper.instance().handleFavorite(mockCleanCardData);
    expect(wrapper.state('favorites').length).toEqual(0);
  });

  it('should change the isActive prop of card to true if not in state', () => {
    expect(mockCleanCardData.isActive).toEqual(false);
    wrapper.instance().handleFavorite(mockCleanCardData);
    expect(mockCleanCardData.isActive).toEqual(true);
  });

  it('should send an alert if favorites array is empty', () => {
    wrapper.setState({favorites: []});
    window.alert = jest.fn();
    wrapper.instance().showFavorites();
    expect(window.alert).toHaveBeenCalled();
  });

  it('should set card state to favorites if favorites array has length', () => {
    wrapper.setState({favorites: [mockCleanCardData]});
    wrapper.instance().showFavorites();
    expect(wrapper.state('cards').length).toEqual(1);
  });

  it('should change the isActive prop of card to false if its in state', () => {
    wrapper.setState({favorites: [mockCleanCardData]});
    expect(mockCleanCardData.isActive).toEqual(true);
    wrapper.instance().handleFavorite(mockCleanCardData);
    expect(mockCleanCardData.isActive).toEqual(false);
  });
});
