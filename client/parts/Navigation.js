import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Navigation Bar
 */
const Navigation = () => {
    // Current route's path without leading slash
    const currRoute = useLocation().pathname.substring(1)

    return (
        <div id="navigation">
            Current page: {currRoute}
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/page1">
                    <li>Page 1</li>
                </Link>
                <Link to="/page2">
                    <li>Page 2</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation
