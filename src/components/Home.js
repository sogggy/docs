import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Home extends Component {
    render() {
        const markdown = "# Home"

        return (
            <ReactMarkdown source={markdown}/>
        )
    }
}

export default Home