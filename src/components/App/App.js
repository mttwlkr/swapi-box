import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js'
import {getAPI} from '../../cleaners/cleaner.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: '',
      info: [],
      favorites: [],
    }
  }

  handleClick = (e) => {
    switch (e.target.name) {
      case 'vehicles': this.handleVehicles()
      break;
      case 'people': this.handlePeople()
      break;
      case 'planets': this.handlePlanets()
      break;
    }
  }

  showFavorites = () => {
    let currentFavorites = this.state.favorites
    this.setState({info: currentFavorites})
  }

  handleFavorite = (card) => {
    const newFavorites = this.state.favorites.filter(fav => fav.name !== card.name)
    const newState = [...newFavorites, card]
    this.setState({favorites: newState})     
  }

  handleVehicles = async () => {
    const response = await getAPI('vehicles')
    this.setState({info: response})
  }

  handlePlanets = async () => {
    const response = await getAPI('planets')
    this.setState({info: response})
  }

  handlePeople = async () => {
    const response = await getAPI('people')
    this.setState({info: response})
  }

  async componentDidMount() {
    const response = await getAPI('films')
    this.setState({scroll: response})
  }

  render() {
    return (
      <div className="App">
        <Header 
          controlFunction={this.showFavorites}
          value={this.state.favorites}
        />
        <Nav 
          controlFunction={this.handleClick}
        />
        <Main
          scroll={this.state.scroll} 
          info={this.state.info}
          controlFunction={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;