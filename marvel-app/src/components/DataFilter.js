import React from "react"

const DataFilter = props => {
    <div>
        <label>Search: </label>
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder="Name/Description/Comics"
        />
    </div>
}

export default DataFilter