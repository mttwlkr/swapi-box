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
          controlFunction={this.handleClick}
        />
        <Nav 
          controlFunction={this.handleClick}
        />
        <Main 
          scroll={this.state.scroll} 
          info={this.state.info}
          // people={this.state.people}
          // planets={this.state.planets}
          // vehicles={this.state.vehicles}
          controlFunction={this.handleClick}
        />
      </div>
    );
  }
}

export default App;

//return <li{`className=${element}`}>{element: element}</li>