import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class VouchAPI extends Component {
    render() {
        const markdown = `
        # Vouch APIs
        `

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default VouchAPI