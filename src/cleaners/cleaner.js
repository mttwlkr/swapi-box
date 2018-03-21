const getAPI = async (type) => {
  const url = `https://swapi.co/api/${type}/`
  const response = await fetch(url)
  const data = await response.json()
  let answer;

  switch (type) {
    case 'films': answer = getOpeningScroll(data)
    break;
    case 'people': answer = getPeople(data)
    break;
    case 'planets': console.log('planets')
    break;
    case 'vehicles': console.log('vehicles')
  }
  return answer
}

const getOpeningScroll = async (data) => {

  let randomNumber = Math.floor((Math.random() * 7) + 1)
  const film = data.results[randomNumber]
  return ({
    scroll: film.opening_crawl,
    title: film.title,
    date: film.release_date
  })
}

const getPeople = async (data) => {

  const promises = data.results.map(async(person) => {
    const personName = person.name
    const homeworld = await getHomeWorld(person.homeworld)
    const species = await getSpecies(person.species)
    return {personName, ...homeworld, species}
  })
  return await Promise.all(promises)
}

const getHomeWorld = async (homeworld) => {
  const response = await fetch(homeworld)
  const data = await response.json()
  const homeworldObj = ({planetName: data.name, population: data.population})
  return Promise.resolve(homeworldObj)
}

const getSpecies = async (species) => {
  const response = await fetch(species)
  const data = await response.json()
  return Promise.resolve(data.name)
}

export {
  getAPI
}

