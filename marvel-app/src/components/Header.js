import React from "react";
import DataFilter from "./DataFilter"
import "./Header.css"

const Header = props => {
    return (
        <header className="header-container">
            <h1>Marvel Roster</h1>
            <DataFilter onChange={props.onChange} />
        </header>
    )
}

export default Header