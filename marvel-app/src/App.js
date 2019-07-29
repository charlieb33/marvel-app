import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app-container">
        <Header />
      </div>
    )
  }
}

export default App;
