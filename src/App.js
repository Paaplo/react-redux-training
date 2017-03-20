import React, { Component } from 'react';
import './App.css';

import Game from './views/Game'
import Title from './views/Title'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Game/>
      </div>
    );
  }
}

export default App;
