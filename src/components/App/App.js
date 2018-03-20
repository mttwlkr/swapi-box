import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js'
// import fetchData from '../../cleaners/fetchData.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: '',
      films: '',
      people: '',
      vehicles: '',
      planets: '',
      error: false
    }
    this.getMovie = this.getMovie.bind(this)
  }

  getMovie() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        if(data.results) {
          this.setState({ scroll: data.results[Math.floor((Math.random() * 7) + 1)].opening_crawl })
        } else {
          throw Error("Error 404")
        }
      })
    .catch(error => this.setState({error: true}))
  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main scroll={this.state.scroll}/>
      </div>
    );
  }
}

export default App;

