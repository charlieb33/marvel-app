import React from "react"
import { ItemImage, ItemText } from "./common";
import "./List.css"

const List = props => {
    const { characters } = props
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

    return (
        <div>
            {props.characters}
        </div>
    )
}

export default List