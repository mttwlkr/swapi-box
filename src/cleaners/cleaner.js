const getAPI = async (type) => {
  const url = `https://swapi.co/api/${type}/`
  const data = await parseFunc(url)
  let answer;

  switch (type) {
    case 'films': answer = cleanOpeningScroll(data)
    break;
    case 'people': answer = cleanPeople(data)
    break;
    case 'planets': answer = cleanPlanets(data)
    break;
    case 'vehicles': answer = cleanVehicles(data)
  }
  return answer
}

const parseFunc = async (url) => {
  try {
    const response = await fetch(url)
    let data = await response.json()
    return data
  } catch (error) {
    throw (new Error ('Was not able to get data'))
  }
}

const cleanOpeningScroll = async (data) => {
  let randomNumber = Math.floor((Math.random() * 7) + 1)
  const film = data.results[randomNumber]
  return ({
    scroll: film.opening_crawl,
    title: film.title,
    date: film.release_date
  })
}

const cleanPeople = async (data) => {
  const promises = data.results.map(async(person) => {
    const name = person.name
    const homeworld = await getHomeWorld(person.homeworld)
    const species = await getSpecies(person.species)
    return {name, ...homeworld, species}
  })
  return await Promise.all(promises)
}

const getHomeWorld = async (homeworld) => {
  const data = await parseFunc(homeworld)
  const homeworldObj = ({planetName: data.name, population: data.population})
  return Promise.resolve(homeworldObj)
}

const getSpecies = async (species) => {
  const data = await parseFunc(species)
  return Promise.resolve(data.name)
}

const cleanPlanets = async (data) => {
  const promises = data.results.map(async(planet) => {
    const {name, terrain, population, climate} = planet
    const residents = await getResidents(planet.residents)
    return ({name, terrain, population, climate, residents})
  })
  return Promise.all(promises)
}

const getResidents = (residentsAPIs) => {
  const allResidents = residentsAPIs.map(async(residentAPI) => {
    const resident = await parseFunc(residentAPI)
    return resident.name
  })
  return Promise.all(allResidents)
} 

const cleanVehicles = async (data) => {
  const promises = data.results.map(async(vehicle) => {
    const {name, model, passengers, vehicle_class} = vehicle
    return ({name, model, passengers, vehicle_class})
  })
  return Promise.all(promises)
}

export {
  getAPI,
  parseFunc,
  cleanOpeningScroll,
  cleanPeople,
  getHomeWorld,
  getSpecies,
  cleanPlanets,
  getResidents,
  cleanVehicles
}

