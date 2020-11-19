import React from 'react'
import { Link } from 'gatsby'

function header() {
    return (
        <div>
            <h1 className="display-4">
                <Link to="/">Pawan Verma's Blog</Link>
                <hr className="bg-white" />
            </h1>

        </div>
    )
}

export default header
