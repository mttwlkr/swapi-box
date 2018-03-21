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
    }
  }

  handleClick = (e) => {
    switch (e.target.name) {
      case 'vehicles': console.log('vehicles')
      break;
      case 'people': this.handlePeople()
      break;
      case 'planets': console.log('planets')
    }
  }

  handlePeople = async() => {
    // const response = await getPeople()
    const response = await getAPI('people')
    console.log("we made it", response)
  }

  async componentDidMount() {
    const response = await getAPI('films')
    this.setState({scroll: response})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav controlFunction={this.handleClick}/>
        <Main scroll={this.state.scroll}/>
      </div>
    );
  }
}

export default App;

