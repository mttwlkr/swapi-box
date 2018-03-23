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
      favorites: []
    }
  }

  handleClick = (e) => {
    switch (e.target.name) {
      case 'vehicles': this.handleFetch('vehicles')
      break;
      case 'people': this.handleFetch('people')
      break;
      case 'planets': this.handleFetch('planets')
      break;
    }
  }

  showFavorites = () => {
    if (this.state.favorites.length === 0) {
      alert('Please choose some favorites first!')
    }
    let currentFavorites = this.state.favorites
    this.setState({info: currentFavorites})
  }

  handleFavorite = (card) => {
    const names = this.state.favorites.map(fav => fav.name)
    const idx = names.indexOf(card.name)
    if (this.state.favorites.length > 0 && idx !== -1 ) {
      const newState = this.state.favorites.filter(fav => fav.name !== card.name)
      this.setState({favorites: newState})
    } else {
      const newState = [...this.state.favorites, card]
      this.setState({favorites: newState})      
    }   
  }

  handleFetch = async (type) => {
    const response = await getAPI(type)
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