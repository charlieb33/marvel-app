import React from "react";

const ItemImage = props => {
    return (
        <div class="image-container">
            <img
                src={props.src}
                alt="character-image"
            />
        </div>
    )
}

export { ItemImage }