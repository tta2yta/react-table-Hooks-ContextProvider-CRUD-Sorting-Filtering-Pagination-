import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">Hooks</Link>
            <Link to="/classes">Classes</Link>
        </div>
    )
}
