import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js'
import {getOpeningScroll, getPeople} from '../../cleaners/cleaner.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    switch (e.target.name) {
      case 'vehicles': console.log('vehicles')
      break;
      case 'people': this.getPeople()
      break;
      case 'planets': console.log('planets')
    }
  }

  async getPeople() {
    const response = await getPeople()
    console.log(response)
  }

  async componentDidMount() {
    const response = await getOpeningScroll()
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

