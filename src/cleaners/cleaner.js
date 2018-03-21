// const getAPI = async (type) => {
//   const url = `https://swapi.co/api/${type}/`
//   const initialFetch = await fetch(url)
//   const response = await initialFetch.json()
//   return response
// }

const getOpeningScroll = async () => {
  let randomNumber = Math.floor((Math.random() * 7) + 1)
  const url = `https://swapi.co/api/films/`
  const initialFetch = await fetch(url)
  const response = await initialFetch.json()
  const data = response.results[randomNumber]
  return ({
    scroll: data.opening_crawl,
    title: data.title,
    date: data.release_date
  })

}


export {
  getOpeningScroll
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
