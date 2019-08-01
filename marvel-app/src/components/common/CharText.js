import React from "react"
import "./ItemText.css"

const CharText = props => {
    return (
        <div className="text-container">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <h4>Comics</h4>
            <ul>
                <li>{props.comic1}</li>
                <li>{props.comic2}</li>
            </ul>
        </div>
    )
}

export { CharText }