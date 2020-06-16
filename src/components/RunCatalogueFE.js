import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class RunCatalogueFE extends Component {
    render() {
        const markdown = `
        # Catalog
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default RunCatalogueFE