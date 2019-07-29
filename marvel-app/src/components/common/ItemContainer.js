import React from "react"
import ItemImage from "./ItemImage";
import ItemText from "./ItemText";

function ItemContainer() {
    return(
        <div className="item-container">
            <ItemImage />
            <ItemText />
        </div>
    )
}

export default ItemContainer