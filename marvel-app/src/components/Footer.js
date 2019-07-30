import React from "react"
import { Link, Route } from "react-router-dom"

function Footer() {
    return (
        <div className="footer-container">
            <Link to="#">Contact</Link>
            <Link to="#">Newsletter</Link>

            <Route path="#" />
            <Route path="#" />
        </div>
    )
}

export default Footer