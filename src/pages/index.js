import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
    <html>
        <h1>Hello</h1>
        <p>Welcome to this experiment</p>
        <Link to="/page-2/">Go to page 2</Link>
    </html>
)

export default IndexPage