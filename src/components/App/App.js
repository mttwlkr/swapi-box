import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js';
import {getAPI} from '../../cleaners/cleaner.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: [],
      cards: [],
      favorites: []
    };
  }

  handleClick = (event) => {
    this.handleFetch(event.target.name);
  }

  showFavorites = () => {
    if (this.state.favorites.length === 0) {
      alert('Please choose some favorites first!');
    }
    let currentFavorites = this.state.favorites;
    this.setState({cards: currentFavorites});
  }

  handleFavorite = (card) => {
    const names = this.state.favorites.map(fav => fav.name);
    const idx = names.indexOf(card.name);
    if (this.state.favorites.length > 0 && idx !== -1 ) {
      card.isActive = false;
      const newState = this.state.favorites
        .filter(fav => fav.name !== card.name);
      this.setState({favorites: newState});
    } else {
      card.isActive = true;
      const newState = [...this.state.favorites, card];
      this.setState({favorites: newState});
    }   
  }

  handleFetch = async (type) => {
    const response = await getAPI(type);
    this.setState({cards: response});
  }

  async componentDidMount() {
    const response = await getAPI('films');
    this.setState({scroll: response});
  }

  render() {
    return (
      <div className="App">
        <div className='header-background'>
          <Header 
            controlFunction={this.showFavorites}
            value={this.state.favorites}
          />
          <Nav 
            controlFunction={this.handleClick}
          />
        </div>
        <Main
          scroll={this.state.scroll} 
          cards={this.state.cards}
          controlFunction={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;