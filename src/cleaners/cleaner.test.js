import { parseFunc,
  cleanPeople,
  cleanPlanets,
  cleanVehicles } from './cleaner.js';

import { mockAPIVehicleData, 
  mockCleanVehicleData,
  mockAPIPeopleData,
  mockCleanPeopleData,
  mockAPIPlanetData,
  mockCleanPlanetData } from './mocks.js';



describe('cleaner', () => {

  describe('getAPI', () => {
    
    it('should decide which method to fire based on arguments', () => {
      const getAPI = jest.fn();
      const cleanVehicles = jest.fn();
      getAPI('vehicles');
      cleanVehicles(mockAPIVehicleData);

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise.resolve()
      }));
      expect(cleanVehicles).toHaveBeenCalled();
    });
  });
  
  describe('parseFunc', () => {

    it('should call fetch on the url passed to it', () => {
      const url = 'https://swapi.co/api/vehicles/';
      
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIVehicleData
          });
        })
      }));
      parseFunc(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should throw an error if response status is not ok', () => {
      const url = '';
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
      expect(parseFunc(url)).rejects
        .toEqual(Error('Was not able to get datas'));
    });
  });

  describe('cleanPeople', () => {

    it('should return name and two undefined properties', async () => {
      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIPeopleData
          });
        })
      }));
      const expected = await cleanPeople(mockAPIPeopleData);
      expect(expected).toEqual(mockCleanPeopleData);
    });
  });

  describe('cleanPlanets', () => {

    it('should return name, terrain, population, climate', async () => {

      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIPlanetData
          });
        })
      }));
      const expected = await cleanPlanets(mockAPIPlanetData);
      expect(expected).toEqual(mockCleanPlanetData);
    });
  });

  describe('cleanVehicles', () => {

    it('should clean the vehicle API data', async () => {      
      window.fetch = jest.fn().mockImplementation( () => ({
        status: 200,
        json: () => new Promise((resolve) => {
          resolve({
            mockAPIVehicleData
          });
        })
      }));
      const expected = await cleanVehicles(mockAPIVehicleData);
      expect(expected).toEqual(mockCleanVehicleData);
    });
  });
});
