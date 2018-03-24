// const mockCleanScr = {
//   characters : ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/4/", "https://swapi.co/api/people/5/", "https://swapi.co/api/people/6/", "https://swapi.co/api/people/7/", "https://swapi.co/api/people/8/", "https://swapi.co/api/people/9/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/12/", "https://swapi.co/api/people/13/", "https://swapi.co/api/people/14/", "https://swapi.co/api/people/15/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/18/", "https://swapi.co/api/people/19/", "https://swapi.co/api/people/81/"],
//   created: "2014-12-10T14:23:31.880000Z",
//   director: "George Lucas",
//   edited: "2015-04-11T09:46:52.774897Z",
//   episode_id: 4,
//   opening_crawl: "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
//   planets: ["https://swapi.co/api/planets/2/", "https://swapi.co/api/planets/3/", "https://swapi.co/api/planets/1/"],
//   producer: "Gary Kurtz, Rick McCallum",
//   release_date: "1977-05-25",
//   species: ["https://swapi.co/api/species/5/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/", "https://swapi.co/api/species/4/"],
//   starships: ["https://swapi.co/api/starships/2/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/5/", "https://swapi.co/api/starships/9/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/13/"],
//   title: "A New Hope",
//   url: "https://swapi.co/api/films/1/",
//   vehicles: ["https://swapi.co/api/vehicles/4/", "https://swapi.co/api/vehicles/6/", "https://swapi.co/api/vehicles/7/", "https://swapi.co/api/vehicles/8/"],
// }

// const mockAPIFilmData = 

const mockCleanCardData = {
  name: 'Sand Crawler',
  model : 'Digger Crawler',
  passengers : '30',
  vehicle_class : 'wheeled',
}

const mockCleanFilmData = {
  title: 'Attack of the Clones',
  date: '2002-05-16',
  text: 'There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....'
}

const mockAPIVehicleData = {
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "https://swapi.co/api/vehicles/4/"
    }
  ]
}

const mockCleanVehicleData = [
  {
  "model": 
  "Digger Crawler", 
  "name": "Sand Crawler", 
  "passengers": "30", 
  "vehicle_class": "wheeled"
  }
]

const mockAPIPeopleData = {
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    }
  ]
}

const mockCleanPeopleData = [
  {
  "name": "Luke Skywalker", 
  "planetName": undefined, 
  "population": undefined, 
  "species": undefined
  }
]


export {
  // mockCleanScrollData,
  mockCleanCardData,
  mockCleanFilmData,
  mockAPIVehicleData,
  mockCleanVehicleData,
  mockAPIPeopleData,
  mockCleanPeopleData
}