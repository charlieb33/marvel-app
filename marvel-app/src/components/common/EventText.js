import React from "react"
import "./ItemText.css"

const EventText = props => {
    return (
        <div className="text-container">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export { EventText }