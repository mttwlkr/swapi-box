import {getAPI, parseFunc, getOpeningScroll, getPeople, getHomeWorld, getSpecies} from './cleaner.js'
import {mockDirtyFilmData} from './cleaner.js'

describe('cleaner', () => {

  describe('getAPI', () => {
    
    it.skip('should decide which method to fire based on arguments', () => {
      const url = `https://swapi.co/api/films/`
      const expected = getOpeningScroll(data)

      window.fetch = jest.fn().mockImplementation((url) => ({
        status: 200,
        json: () => new Promise.resolve()
      }))
  
      expect(getOpeningScroll).toHaveBeenCalled()
    })
  })
  
  describe('parseFunc', () => {

    it('should call fetch on the url passed to it', () => {
      const url = 'https://swapi.co/api/films/'
      
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            mockDirtyFilmData
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

})


// { mockDirtyFilmData: 
//          { characters: 
//             [ 'https://swapi.co/api/people/1/',
//               'https://swapi.co/api/people/2/',
//               'https://swapi.co/api/people/3/',
//               'https://swapi.co/api/people/4/',
//               'https://swapi.co/api/people/5/',
//               'https://swapi.co/api/people/6/',
//               'https://swapi.co/api/people/7/',
//               'https://swapi.co/api/people/8/',
//               'https://swapi.co/api/people/9/',
//               'https://swapi.co/api/people/10/',
//               'https://swapi.co/api/people/12/',
//               'https://swapi.co/api/people/13/',
//               'https://swapi.co/api/people/14/',
//               'https://swapi.co/api/people/15/',
//               'https://swapi.co/api/people/16/',
//               'https://swapi.co/api/people/18/',
//               'https://swapi.co/api/people/19/',
//               'https://swapi.co/api/people/81/' ],
//            created: '2014-12-10T14:23:31.880000Z',
//            director: 'George Lucas',
//            edited: '2015-04-11T09:46:52.774897Z',
//            episode_id: 4,
//            opening_crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....',
//            planets: 
//             [ 'https://swapi.co/api/planets/2/',
//               'https://swapi.co/api/planets/3/',
//               'https://swapi.co/api/planets/1/' ],
//            producer: 'Gary Kurtz, Rick McCallum',
//            release_date: '1977-05-25',
//            species: 
//             [ 'https://swapi.co/api/species/5/',
//               'https://swapi.co/api/species/3/',
//               'https://swapi.co/api/species/2/',
//               'https://swapi.co/api/species/1/',
//               'https://swapi.co/api/species/4/' ],
//            starships: 
//             [ 'https://swapi.co/api/starships/2/',
//               'https://swapi.co/api/starships/3/',
//               'https://swapi.co/api/starships/5/',
//               'https://swapi.co/api/starships/9/',
//               'https://swapi.co/api/starships/10/',
//               'https://swapi.co/api/starships/11/',
//               'https://swapi.co/api/starships/12/',
//               'https://swapi.co/api/starships/13/' ],
//            title: 'A New Hope',
//            url: 'https://swapi.co/api/films/1/',
//            vehicles: 
//             [ 'https://swapi.co/api/vehicles/4/',
//               'https://swapi.co/api/vehicles/6/',
//               'https://swapi.co/api/vehicles/7/',
//               'https://swapi.co/api/vehicles/8/' ] } }


// 0:{personName: "Luke Skywalker", planetName: "Tatooine", population: "200000", species: "Human"}
// 1:{personName: "C-3PO", planetName: "Tatooine", population: "200000", species: "Droid"}
// 2:{personName: "R2-D2", planetName: "Naboo", population: "4500000000", species: "Droid"}
// 3:{personName: "Darth Vader", planetName: "Tatooine", population: "200000", species: "Human"}
// 4:{personName: "Leia Organa", planetName: "Alderaan", population: "2000000000", species: "Human"}
// 5:{personName: "Owen Lars", planetName: "Tatooine", population: "200000", species: "Human"}
// 6:{personName: "Beru Whitesun lars", planetName: "Tatooine", population: "200000", species: "Human"}
// 7:{personName: "R5-D4", planetName: "Tatooine", population: "200000", species: "Droid"}
// 8:{personName: "Biggs Darklighter", planetName: "Tatooine", population: "200000", species: "Human"}
// 9:{personName: "Obi-Wan Kenobi", planetName: "Stewjon", population: "unknown", species: "Human"}