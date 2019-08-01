import React from "react"
import "./ItemText.css"

const EventText = props => {
    return (
        <div className="text-container">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>Comics</p>
            <ul>
                <li>{props.comic1}</li>
                <li>{props.comic2}</li>
            </ul>
        </div>
    )
}

export { EventText }