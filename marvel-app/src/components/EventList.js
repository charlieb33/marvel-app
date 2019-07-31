import React, { Component } from "react"
import axios from "axios";
import { ItemImage, ItemText } from "./common";
import "./List.css"

const key = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

class EventList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          events: [],
        }
    }
    
    async componentDidMount() {
        await this.fetchData()
    }
      
    fetchData = async () => {
        const url = `https://gateway.marvel.com:443/v1/public/events?orderBy=-modified&limit=10&ts=${timestamp}&apikey=${key}&hash=${hash}`;
        const response = await axios.get(url);
        console.log(response)
        const { data: { data: { results } } } = response
        console.log(results)
        this.setState({
          events: results,
        })
    }

    renderItems = () => {
        const { events } = this.state
        if (events) {
            return events.map(event => {
                const {
                    id,
                    title,
                    description,
                    thumbnail: { path, extension },
                } = event
                return (
                    <div className="item-container" key={id}>
                        <ItemImage
                            src={`${path}.${extension}`}
                            alt={`event-image`}
                        />
                        <ItemText
                            title={title}
                            description={description}
                        />
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default EventList