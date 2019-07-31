import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List"
import axios from "axios";
import "./App.css";

const key = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      filterValue: ""
    }
  }

  async componentDidMount() {
    await this.fetchData()
  }
  
  fetchData = async () => {
    const url =
      `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&ts=${timestamp}&apikey=${key}&hash=${hash}`;
    const response = await axios.get(url);
    const { data: { data: { results } } } = response
    this.setState({
      characters: results,
      filterValue: ""
    })
  }

  handleSearchChange = event => {
    event.preventDefault()
    const input = event.target.value

    const filteredList = this.state.characters.filter(char => {
      if (char.name.toLowerCase().includes(input.toLowerCase())){
        return char
      }
    })
    if (input.length < 1){
      this.fetchData()
    } else {
      this.setState({
        characters: filteredList
      })
    }
    
    // this.setState(() => {
    //   const filteredList = this.state.characters.name.filter(name => {
    //     return name.toLowerCase().includes(input.toLowerCase())})
    // })
  }
  
  handleDropdownChange = event => {
    event.preventDefault()
    const { value } = event.target
    this.setState({
      characters:  value
    })
  }

  render() {
    return (
      <div className="app-container">
        <Header
            list={List}
            filterValue={this.state}
            onChange={this.handleSearchChange}
            // onChange={this.handleDropdownChange}
          />
        <List
          characters={this.state.characters}
        />
      </div>
    )
  }
}

export default App;
