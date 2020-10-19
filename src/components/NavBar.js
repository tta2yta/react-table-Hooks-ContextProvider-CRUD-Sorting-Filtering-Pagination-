import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <h3 className="heading-nav">Data Table with Full Functionlity using Hooks and Component Classes</h3>
            <div className="main-nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link to="/hooks">Hooks</Link>
            <Link to="/classes">Classes</Link>
            </div>
           
        </div>
    )
}
