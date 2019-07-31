import React from "react"

const DataDropdown = props => {
    return (
        <div>
            <select
                onChange={props.onChange}>
                <option>Display All</option>
                <option>Available Description</option>
                <option>Unavailable Description</option>
            </select>
        </div>
    )
}

export default DataDropdown