import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Components extends Component {
    render() {
        const markdown = `
        # Components
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default Components