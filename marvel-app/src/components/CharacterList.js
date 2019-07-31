import React, { Component } from "react"
import axios from "axios";
import { ItemImage, ItemText } from "./common";
import "./List.css"

const key = process.env.REACT_APP_DATA_KEY;
const hash = process.env.REACT_APP_DATA_HASH;
const timestamp = process.env.REACT_APP_DATA_TIMESTAMP;

class CharacterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          characters: [],
        }
    }
    
    async componentDidMount() {
        await this.fetchData()
    }
      
    fetchData = async () => {
        const url =
          `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&ts=${timestamp}&apikey=${key}&hash=${hash}`;
        const response = await axios.get(url);
        const { data: { data: { results } } } = response
        this.setState({
          characters: results,
        })
    }

    renderItems = () => {
        const { characters } = this.state
        if (characters) {
            return characters.map(char => {
                const {
                    id,
                    name,
                    description,
                    thumbnail: { path, extension },
                    comics: { items }
                } = char
                return (
                    <div className="item-container" key={id}>
                        <ItemImage
                            src={`${path}.${extension}`}
                            alt={`character-image`}
                        />
                        <ItemText
                            name={name}
                            description={description ? description : "Description Unavailable"}
                            comic1={items[0].name}
                            comic2={items[7].name}
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

export default CharacterList