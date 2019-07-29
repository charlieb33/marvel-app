import React from "react";

const ItemImage = props => {
    return (
        <div className="image-container">
            <img
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}

export { ItemImage }