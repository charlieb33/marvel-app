import React, { Component } from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList"
import EventList from "./components/EventList"
import { Link, Route } from "react-router-dom"
import "./App.css";

const apiKey = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

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

  render() {
    return (
      <div className="app-container">
        <Header
            filterValue={this.state}
            onChange={this.handleSearchChange}
            // onChange={this.handleDropdownChange}
        />
        <nav>
          <Link to="/characters/">Characters</Link>
          <Link to="/events/">Events</Link>
          <Route path="/characters/" component={(props) =>
              <CharacterList
                {...props}
                timestamp={timestamp}
                apiKey={apiKey}
                hash={hash}
              />}
            />
            <Route path="/events/" component={(props) =>
              <EventList
                {...props}
                timestamp={timestamp}
                apiKey={apiKey}
                hash={hash}
              />}
            />
        </nav>
      </div>
    )
  }
}

export default App;
