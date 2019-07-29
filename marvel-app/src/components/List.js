import React, { Component } from "react"
import axios from "axios"

class List extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {}

    renderItems = () => {}

    render() {
        return(
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default List