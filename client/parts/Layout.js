import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

/**
 * Layout
 */
const Layout = () => {
    return (
        <>
            <Navigation />
            <div id="content">
                <Outlet />
            </div>
        </>
    )
}

export default Layout
