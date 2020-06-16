import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class RunBotbuilder extends Component {
    render() {
        const markdown = `
        # Botbuilder
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default RunBotbuilder