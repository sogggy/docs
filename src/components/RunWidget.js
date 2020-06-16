import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class RunWidget extends Component {
    render() {
        const markdown = `
        # Widget
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default RunWidget