import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List"
import axios from "axios";
import "./App.css";

const key = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  async componentDidMount() {
    await this.fetchData()
  }
  
  fetchData = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&ts=${timestamp}&apikey=${key}&hash=${hash}`;
    const response = await axios.get(url);
    const { data: { data: { results } } } = response
    this.setState({
      characters: results
    })
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <List characters={this.state.characters}/>
      </div>
    )
  }
}

export default App;
