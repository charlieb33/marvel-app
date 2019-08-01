import React, { Component } from "react"
import DataFilter from "./DataFilter"
import axios from "axios";
import { ItemImage, CharText } from "./common";
import "./List.css"

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
          `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=10&ts=${this.props.timestamp}&apikey=${this.props.apiKey}&hash=${this.props.hash}`;
        const response = await axios.get(url);
        const { data: { data: { results } } } = response
        this.setState({
          characters: results,
        })
    }

    handleSearchChange = event => {
        event.preventDefault()
        const input = event.target.value
    
        const filteredList = this.state.characters.filter(char => {
          if (char.name.toLowerCase().includes(input.toLowerCase())){
            return char
          }
          })
          if (input.length < 1){
            this.fetchData()
          } else {
            this.setState({
              characters: filteredList
            })
        }
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
                        <CharText
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
                <div className="section-heading">
                    <h3>Characters</h3>
                    <DataFilter
                        onChange={this.handleSearchChange}
                        placeholder="Name"
                    />
                </div>
                {this.renderItems()}
            </div>
        )
    }
}

export default CharacterList