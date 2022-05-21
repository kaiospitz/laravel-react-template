import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './parts/Layout'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

/**
 * Renders the router to the root
 */
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
