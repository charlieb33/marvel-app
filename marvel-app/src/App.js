import React, { Component } from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList"
// import EventList from "./components/List"
import "./App.css";

class App extends Component {
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
            filterValue={this.state}
            onChange={this.handleSearchChange}
            // onChange={this.handleDropdownChange}
        />
        <nav>
          
        </nav>
        <CharacterList />
      </div>
    )
  }
}

export default App;
