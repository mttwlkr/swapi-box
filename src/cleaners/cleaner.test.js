import { getAPI,
  parseFunc,
  cleanOpeningScroll,
  cleanPeople,
  getHomeWorld,
  getSpecies,
  cleanPlanets,
  getResidents,
  cleanVehicles } from './cleaner.js'

import {mockAPIFilmData, 
  mockCleanCardData, 
  mockCleanFilmData, 
  mockAPIVehicleData, 
  mockCleanVehicleData,
  mockAPIPeopleData,
  mockCleanPeopleData
} from './mocks.js'

describe('cleaner', () => {

  describe('getAPI', () => {
    
    it.skip('should decide which method to fire based on arguments', () => {
      const url = `https://swapi.co/api/films/`
      const expected = cleanOpeningScroll(mockAPIFilmData)

      window.fetch = jest.fn().mockImplementation((url) => ({
        status: 200,
        json: () => new Promise.resolve()
      }))
  
      expect(cleanOpeningScroll).toHaveBeenCalled()
    })
  })
  
  describe('parseFunc', () => {

    it('should call fetch on the url passed to it', () => {
      const url = 'https://swapi.co/api/films/'
      
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            mockAPIFilmData
          })
        })
      }))
      parseFunc(url)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should throw an error if response status is not ok', () => {
      const url = ''
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 500,
      }))
      expect(parseFunc(url)).rejects.toEqual(Error ('Was not able to get data'))
    })
  })

  describe('cleanOpeningScroll', () => {
    let mockRandomNumber;

    it.skip('should return a cleaned version of the opening scroll', async () => {
        
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIFilmData
          })
        })
      }))
      console.log(cleanOpeningScroll(mockAPIFilmData))
      const returnedValue = await cleanOpeningScroll(mockAPIFilmData)
      expected(returnedValue).toEqual(mockCleanFilmData)
      console.log(expected)

      // expect(expected).toEqual(mockCleanFilmData)
    })
  })

  describe('cleanPeople', () => {

    it('should retrieve the person name and call getHomeWorld and getSpecies methods', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIPeopleData
          })
        })
      }))
      const expected = await cleanPeople(mockAPIPeopleData)
      expect(expected).toEqual(mockCleanPeopleData)
    })  
  })

  describe('getHomeWorld', () => {

    it('should return a cleaned object of the homeworld name and population', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            
          })
        })
      }))
      const expected = await getHomeWorld()
      console.log(expected)
    })
  })


















  describe('cleanVehicles', () => {

    it('should clean the vehicle API data', async () => {      
      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIVehicleData
          })
        })
      }))
      const expected = await cleanVehicles(mockAPIVehicleData)
      expect(expected).toEqual(mockCleanVehicleData)
    })
  })
})
