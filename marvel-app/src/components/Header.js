import React from "react";
import DataDropdown from "./DataDropdown"
import DataFilter from "./DataFilter"
import "./Header.css"

const Header = props => {
    return (
        <header className="header-container">
            <h1>Marvel Roster</h1>
            <DataFilter onChange={props.onChange} />
            <DataDropdown onChange={props.onChange} />
        </header>
    )
}

export default Header