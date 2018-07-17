import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HI THERE</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <a href="/auth/google">Sign in with google</a>
      </div>
    );
  }
}

export default App;
