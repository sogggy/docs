import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class MultilangFeature extends Component {
    render() {
        const markdown = `
        # Multilang
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default MultilangFeature