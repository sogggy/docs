import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { useLocation } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'

function RenderMarkdown({ file, onRender, components}) {
    const [body, setBody] = useState('')
    const baseurl = 'http://doc.vouch.sg'
    let fullurl = baseurl + file + '/index.html.md'
    if (file === '/') {
        fullurl = 'http://doc.vouch.sg/index.html.md'
    }
    const location = useLocation().pathname
    useEffect(() => {
        onRender(location, file)
        const abortController = new AbortController()
        const fetchData = async () => {
            try {
                const result = await fetch(fullurl, {mode: 'cors', method: 'get', signal: abortController.signal})
                if (result.status === 404) {
                    setBody('# Page has yet to be uploaded, click on Services - New Infra for uploaded document')
                } else {
                    const text = await result.text()
                    setBody(text)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

        return () => {
            abortController.abort()
        }
    })
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <ReactMarkdown source = {'# ' + components}/>        
                </Container>
            </Jumbotron>
            <Container>
                <ReactMarkdown source = {body} escapeHtml={false}/>
            </Container>
        </>
    )
}

export default RenderMarkdown