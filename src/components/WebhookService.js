import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class WebhookService extends Component {
    render() {
        const markdown = `
        # Webhook
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default WebhookService