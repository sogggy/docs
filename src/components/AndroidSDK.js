import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class AndroidSDK extends Component {
    render() {
        const markdown = "# SDK"

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default AndroidSDK