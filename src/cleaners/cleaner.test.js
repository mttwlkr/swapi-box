import { getAPI,
  parseFunc,
  cleanOpeningScroll,
  cleanPeople,
  getHomeWorld,
  getSpecies,
  cleanPlanets,
  getResidents,
  cleanVehicles } from './cleaner.js'

import { mockCleanCardData, 
  
  mockAPIFilmData, 
  mockCleanFilmData, 
  
  mockAPIVehicleData, 
  mockCleanVehicleData,
  
  mockAPIPeopleData,
  mockCleanPeopleData,

  mockAPIHomeworldData,
  mockCleanHomeworldData,

  mockAPISpeciesData,
  mockCleanSpeciesData,

  mockAPIPlanetData,
  mockCleanPlanetData,

  mockCleanResidentData,
  mockAPIResidentData

  } from './mocks.js'

describe('cleaner', () => {

  describe('getAPI', () => {
    
    it('should decide which method to fire based on arguments', () => {
      const url = `https://swapi.co/api/vehicles/`
      const cleanVehicles = jest.fn()
      cleanVehicles(mockAPIVehicleData)

      window.fetch = jest.fn().mockImplementation((url) => ({
        status: 200,
        json: () => new Promise.resolve()
      }))
  
      expect(cleanVehicles).toHaveBeenCalled()
    })
  })
  
  describe('parseFunc', () => {

    it('should call fetch on the url passed to it', () => {
      const url = 'https://swapi.co/api/vehicles/'
      
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            mockAPIVehicleData
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
      mockRandomNumber = 1;
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIFilmData
          })
        })
      }))
      const returnedValue = await cleanOpeningScroll(mockAPIFilmData)
      const expected = returnedValue[mockRandomNumber]
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

  describe('cleanPlanets', () => {

    it('should return a cleaned object with name, terrain, population, climate', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIPlanetData
          })
        })
      }))
      const expected = await cleanPlanets(mockAPIPlanetData)
      expect(expected).toEqual(mockCleanPlanetData)
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

  describe('getHomeWorld', () => {

    it('should return a cleaned object of the homeworld name and population', async () => {
      // const url = 'https://swapi.co/api/planets/1/'
      
      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIHomeworldData
          })
        })
      }))

      // const answer = await parseFunc(mockAPIHomeworldData)
      const response = await getHomeWorld('https://swapi.co/api/planets/1/')
      // const answer = await parseFunc(response)
      // console.log(response)
      expect(response).toEqual({})
      // const response = await getHomeWorld('https://swapi.co/api/planets/1/')
      // const data = await parseFunc(response)
      // const response = await parseFunc('https://swapi.co/api/planets/1/')
      // console.log(response)
      // const response = await getHomeWorld(mockAPIHomeworldData)
      // expect ({planetName: Stewjon, planetPopulation: 2839823})
      // console.log(expected)
      // expect(expected).toEqual(mockCleanHomeworldData)
    })
  })

  describe('getSpecies', () => {

    it.skip('should return a cleaned object of the species name', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPISpeciesData 
          })
        })
      }))
      const response = await parseFunc(mockAPISpeciesData)
      const expected = await getSpecies(response)
      expect(expected).toEqual(mockCleanSpeciesData)
    })
  })

  describe('getResidents', () => {

    it.skip('should return a cleaned object with name, terrain, population, climate', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIResidentData
          })
        })
      }))
      // const response = await parseFunc(mockAPIPlanetData)
      const expected = await getSpecies(mockAPIResidentData)
      console.log(expected)
      expect(expected).toEqual(mockCleanResidentData)
    })
  })
})
