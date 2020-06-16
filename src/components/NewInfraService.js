import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class NewInfraService extends Component {
    render() {
        const markdown = `
        # New Infra
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default NewInfraService