import React from "react"
import { ItemImage, ItemText } from "./index"

const ItemContainer = () => {
    return (
        <div className="item-container">
            <ItemImage />
            <ItemText />
        </div>
    )
}

export { ItemContainer }