import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List"
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <List />
      </div>
    )
  }
}

export default App;
