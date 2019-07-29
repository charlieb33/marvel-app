import React from "react"

const ItemText = props => {
    return (
        <div className="text-container">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>Comics</p>
            <ul>
                <li>{props.comic1}</li>
                <li>{props.comic2}</li>
            </ul>
        </div>
    )
}

export { ItemText }