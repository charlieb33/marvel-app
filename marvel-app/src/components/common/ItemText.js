import React from "react"

function ItemText(props) {
    return(
        <div className="text-container">
            <h4>{props.name}</h4>
        </div>
    )
}

export default ItemText