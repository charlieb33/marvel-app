import React from "react"

const DataFilter = props => {
    return(
        <div>
        <label htmlFor="char-search">
            Search: 
        </label>
        <input
            type="text"
            value={props.value}
            onFilter={props.onFilter}
            name="char-search"
        />
    </div>
    )
}

export default DataFilter