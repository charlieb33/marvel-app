import React from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList"
import EventList from "./components/EventList"
import { Link, Route } from "react-router-dom"
import "./App.css";

const apiKey = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <h2 className="headline">
        CHECK OUT THE MOST UP-TO-DATE INFO ON MARVEL'S CHARACTERS AND EVENTS
      </h2>
      <div>
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/characters/">Characters</Link>
          <Link to="/events/">Events</Link>
        </nav>
        <div className="info-container">
          <h4>Characters</h4>
          <ul>
            <li>See the characters' names, descriptions (if available),
              and a few of their comics</li>
          </ul>
          <h4>Events</h4>
          <ul>
            <li>See the names and descriptions of events from the comics
              and stories</li>
          </ul>
        </div>
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

export default App;
