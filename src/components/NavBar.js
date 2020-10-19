import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <h5 className="heading-nav">Data Table with Full Functionlity using Hooks and Component Classes</h5>
            <div className="main-nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/hooks">Hooks</Link>
            <Link className="nav-item" to="/classes">Classes</Link>
            </div>
           
        </div>
    )
}
