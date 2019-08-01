import React, { Component } from "react"
import DataFilter from "./DataFilter"
import axios from "axios";
import { ItemImage, EventText } from "./common";
import "./List.css"

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
        const url =
            `https://gateway.marvel.com:443/v1/public/events?orderBy=-modified&limit=10&ts=${this.props.timestamp}&apikey=${this.props.apiKey}&hash=${this.props.hash}`;
        const response = await axios.get(url);
        const { data: { data: { results } } } = response
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
                        <EventText
                            title={title}
                            description={description}
                        />
                    </div>
                )
            })
        }
    }

    handleSearchChange = event => {
        event.preventDefault()
        const input = event.target.value
    
        const filteredList = this.state.events.filter(evt => {
          if (evt.title.toLowerCase().includes(input.toLowerCase())){
            return evt
          }
          })
          if (input.length < 1) {
            this.fetchData()
          } else {
            this.setState( {
              events: filteredList
            })
        }
    }

    render() {
        return (
            <div>
                <div className="section-heading">
                    <h3>Events</h3>
                    <DataFilter onChange={this.handleSearchChange} placeholder="Title" />
                </div>
                {this.renderItems()}
            </div>
        )
    }
}

export default EventList