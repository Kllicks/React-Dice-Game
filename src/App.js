import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scoreboard/>
        <Player1/>
        <Player2/>
        <Score/>
      </div>
    );
  }
}

export default App;
