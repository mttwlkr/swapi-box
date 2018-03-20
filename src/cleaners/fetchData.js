
const root = 'https://swapi.co/api/'

const fetchData() {

  return fetch(`${root}`)
}

export default fetchData;


  //   fetch('https://swapi.co/api/films/')
  //     .then(response => response.json())
  //     .then(data => this.setState({films: data}))
  //     .catch(error => this.setState({error: true}))
