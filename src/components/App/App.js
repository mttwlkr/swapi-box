import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Main from '../Main/Main.js';
import Header from '../Header/Header.js'
import {getOpeningScroll} from '../../cleaners/cleaner.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: {},
    }
  }

  handleClick = () => {
    // console.log('sup')
  }

  async componentDidMount() {
    const response = await getOpeningScroll()
    this.setState({scroll: response})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav handleClick={this.handleClick}/>
        <Main scroll={this.state.scroll}/>
      </div>
    );
  }
}

export default App;

