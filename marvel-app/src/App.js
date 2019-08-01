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
  render() {
    return (
      <div className="app-container">
        <Header
            filterValue={this.state}
            onChange={this.handleSearchChange}
        />
        <h2 className="headline">
          CHECK OUT THE MOST UP-TO-DATE INFO ON MARVEL'S CHARACTERS AND EVENTS
        </h2>
        <div>
          <nav className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/characters/">Characters</Link>
            <Link to="/events/">Events</Link>
          </nav>
          <main>
            <Route path="/characters/" component={ props =>
              <CharacterList
                {...props}
                timestamp={timestamp}
                apiKey={apiKey}
                hash={hash}
              />}
            />
            <Route path="/events/" component={ props =>
              <EventList
                {...props}
                timestamp={timestamp}
                apiKey={apiKey}
                hash={hash}
              />}
            />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
