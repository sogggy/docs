import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'

function RenderMarkdown(props) {
        const { file } = props
        console.log(useLocation().pathname)
        return (
            <ReactMarkdown source ={file}/>
        )
}

export default RenderMarkdown