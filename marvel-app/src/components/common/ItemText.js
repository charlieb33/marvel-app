import React from "react"

const ItemText = props => {
    return (
        <div className="text-container">
            <h4>{props.name}</h4>
        </div>
    )
}

export { ItemText }