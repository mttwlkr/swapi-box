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



// Name xx
// Homeworld
// Species
// Population of Homeworld
// A button to “Favorite” the person


export {
  getAPI
}






























// const getAPI = (type) => {
//   const respo = `https://swapi.co/api/${type}`
//   fetch(url)
//     .then(response => response.json())
// }

// const getOpeningScroll = () => {
//   const url = 'https://swapi.co/api/films/'
//   const initialFetch = await fetch(url)
//   const response = await initialFetch.json()
//   const data = response


//   return fetch('https://swapi.co/api/films/')
//     .then(response => response.json())
//     .then(data => {
//       if (data.results) {
//         return data.results
//       }})
//     .catch(error => console.log(error))
// }


// const getOpeningScroll = () => {
//   fetch('https://swapi.co/api/films')
//     .then(response => response.json())
//     .then(data => {
//       if(data.results) {
//         this.setState({ scroll: data.results[Math.floor((Math.random() * 7) + 1)].opening_crawl })
//       } else {
//         throw Error("Error 404")
//       }
//     })
//   .catch(error => this.setState({error: true}))
// }


  // getMovie() {
  //   fetch('https://swapi.co/api/films')
  //     .then(response => response.json())
  //     .then(data => {
  //       if(data.results) {
  //         this.setState({ scroll: data.results[Math.floor((Math.random() * 7) + 1)].opening_crawl })
  //       } else {
  //         throw Error("Error 404")
  //       }
  //     })
  //   .catch(error => this.setState({error: true}))
  // }

  // peopleHelper = (peopleArray) => {
  //   const homeWorld = peopleArray.map( person => {
  //     return fetch(person.homeworld)
  //       .then(response => response.json())
  //       .then(planet => ({name: planet.name, population:planet.population}))
  //   })
  //   return homeWorld
  // }

  // fetchPeople = () => {
  //   fetch('https://swapi.co/api/people/')
  //     .then(response => response.json())
  //     .then(data => this.peopleHelper(data.results))
  //     .then(homeWorld => homeWorld.json())
  //     .then(data2 => console.log(data2))
  // }




// const root = 'https://swapi.co/api/'

// const fetchData() {

//   return fetch(`${root}`)
// }

// export default fetchData;


  //   fetch('https://swapi.co/api/films/')
  //     .then(response => response.json())
  //     .then(data => this.setState({films: data}))
  //     .catch(error => this.setState({error: true}))
