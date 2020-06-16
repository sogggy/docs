import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'

function RenderMarkdown(props) {
    const baseurl = 'https://s3-ap-southeast-1.amazonaws.com/doc.vouch.sg'
    const { file } = props
    console.log(file)
    const fullurl = baseurl + file + '/new-infra.md'
    console.log(fullurl)
    const location = useLocation().pathname
    //console.log(location)
    const { onRender} = props
    onRender(location, file)
    //console.log(useLocation().pathname)
    // useEffect(() => {
    //     async function getPage() {
    //         const html = await fetch('doc.vouch.sg')
    //         return html
    //     }
    //     res = getPage()
    // })
    fetch("https://www.google.com",{
        mode: 'no-cors',
        method: 'get'
    }).then(function(response) {
        response.text().then(function(text) {
            console.log(response);
        })
    }).catch(function(err) {
      console.log(err)
    });
    return (
        <ReactMarkdown source ={file}/>
    )
}

export default RenderMarkdown