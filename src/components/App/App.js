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
      scroll: {},
      people: '',
      planets: {},
      vehicles: {}
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
      case 'favorites-card': console.log('favorites-card')
      break;
      case 'favorites-nav': console.log('favorites-nav')
    }
  }

  handleVehicles = async () => {
    const response = await getAPI('vehicles')
    this.setState({vehicles: response})
  }

  handlePlanets = async () => {
    const response = await getAPI('planets')
    this.setState({planets: response})
  }

  handlePeople = async () => {
    const response = await getAPI('people')
    this.setState({people: response})
  }

  async componentDidMount() {
    const response = await getAPI('films')
    this.setState({scroll: response})
  }

  render() {
    return (
      <div className="App">
        <Header 
          controlFunction={this.handleClick}
        />
        <Nav 
          controlFunction={this.handleClick}
        />
        <Main 
          scroll={this.state.scroll} 
          people={this.state.people}
          controlFunction={this.handleClick}
        />
      </div>
    );
  }
}

export default App;

