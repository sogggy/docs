import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class IOSSDK extends Component {
    render() {
        const markdown = `
        # iOS SDK
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default IOSSDK