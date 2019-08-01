import React from "react"

const DataFilter = props => {
    return(
        <div>
            <label htmlFor="search">
                Search: 
            </label>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                name="search"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default DataFilter