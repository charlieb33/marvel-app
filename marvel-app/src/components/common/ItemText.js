import React from "react"
import "./ItemText.css"

const ItemText = props => {
    return (
        <div className="text-container">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>Comics</p>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
            </ul>
        </div>
    )
}

export { ItemText }