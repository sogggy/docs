import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class BotBuilderService extends Component {
    render() {
        const markdown = `
        # Botbuilder
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default BotBuilderService