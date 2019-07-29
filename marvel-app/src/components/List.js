import React, { Component } from "react"
import axios from "axios"
import { ItemImage, ItemText } from "./common"

const key = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

class List extends Component {
    constructor() {
        super()
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        await this.fetchData()
    }

    fetchData = async () => {
        const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&ts=${timestamp}&apikey=${key}&hash=${hash}`;
        const response = await axios.get(url);
        const { data: { data: { results } } } = response
        console.log(results)
        this.setState({
            characters: results
        })
        console.log(this.state)
    }

    renderItems = () => {
        const { characters } = this.state
        if (characters) {
            return characters.map(char => {
                const {
                    name,
                    description,
                    thumbnail: { path, extension }
                } = char
                return (
                    <div className="item-container">
                        <ItemImage src={`${path}.${extension}`} />
                        <ItemText
                            name={name}
                            description={description}
                        />
                    </div>
                )
            })
        }
    }

    render() {
        return(
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default List