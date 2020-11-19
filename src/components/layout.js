import React from 'react'
import Header from './header'

function layout({ children }) {
    return (
        <div className="container">
            <Header />
            { children }
        </div>
    )
}

export default layout
