import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class WebSDK extends Component {
    render() {
        const markdown = `
        # Web SDK
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default WebSDK