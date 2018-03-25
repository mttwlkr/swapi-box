import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import { getAPI,
  parseFunc,
  cleanOpeningScroll,
  cleanPeople,
  getHomeWorld,
  getSpecies,
  cleanPlanets,
  getResidents,
  cleanVehicles } from '../../cleaners/cleaner.js'

import {mockAPIFilmData, 
  mockCleanCardData, 
  mockCleanFilmData, 
  mockAPIVehicleData, 
  mockCleanVehicleData,
  mockAPIPeopleData,
  mockCleanPeopleData } from '../../cleaners/mocks.js'


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true})
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should invoke the handleFetch method with different arguments', async () => {
    const mockEvent = {target: {name: 'vehicles'}}
    const handleFetch = jest.spyOn(wrapper.instance(), 'handleFetch')
    wrapper.instance().handleClick(mockEvent)
    expect(handleFetch).toHaveBeenCalled()
  })

  it('should update the cards array with the favorite cards if favorites card array has length', () => {
    expect(wrapper.state('cards').length).toEqual(0)
    wrapper.setState({favorites: [mockCleanCardData]})
    wrapper.instance().showFavorites()
    expect(wrapper.state('cards').length).toEqual(1)
  })

  it('should add a favorited card to favorites state array', () => {
    expect(wrapper.state('favorites').length).toEqual(0)
    wrapper.instance().handleFavorite(mockCleanCardData)
    expect(wrapper.state('favorites').length).toEqual(1)
  })

  it('should not add a card to favorites state array if that card is already in array', () => {
    expect(wrapper.state('favorites').length).toEqual(0)
    wrapper.setState({favorites: [mockCleanCardData]})
    wrapper.instance().handleFavorite(mockCleanCardData)
    expect(wrapper.state('favorites').length).toEqual(0)
  })

  it.skip('should set cards in state when handleFetch is invoked', async () => {
    expect(wrapper.state('cards').length).toEqual(0)
    wrapper.instance().handleFetch('vehicles')

    window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            mockAPIVehicleData
          })
        })
      }))
    const response = await parseFunc(`https://swapi.co/api/vehicles/`)
    const answer = await cleanVehicles(response)
    console.log(answer)
    expect(wrapper.state('cards').length).toEqual(10)
  }) 
})


    // window.fetch = jest.fn().mockImplementation( () => ({
    //     status: 200,
    //     json: () => new Promise((resolve, reject) => {
    //       resolve({
    //         mockAPIVehicleData
    //       })
    //     })
    //   }))
    // parseFunc()
    // const answer = await cleanVehicles(mockAPIVehicleData)
    // console.log(answer)

    // expect(wrapper.instance().handleFetch).toHaveBeenCalledWith(mockVehicles)
    // console.log(wrapper)
    // const handleFetch = jest.fn()
    // const parseFunc = jest.fn()
    // const getAPI = jest.fn()
    // wrapper.instance().handleClick(mockEvent)

    // window.fetch = jest.fn().mockImplementation(() => ({
    //   status: 200,
    //   json: () => new Promise.resolve()
    // }))

    // console.log(wrapper.debug())
    // expect(wrapper.instance().handleFetch()).toHaveBeenCalled()
