import React from "react";

function ItemImage(props) {
    return(
        <div class="image-container">
            <img
                src={props.src}
                alt="character-image"
            />
        </div>
    )
}

export default ItemImage