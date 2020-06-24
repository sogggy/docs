import React, { Component } from 'react'
import {Nav} from "react-bootstrap"
import { HashLink as Link } from 'react-router-hash-link'
import './SideBarItems.css'


class SideBarItems extends Component {
    render() {
        const { subItems } = this.props
        return (
            <>
                {subItems.map((item, index) => (
                    <Nav.Item key={index} className="navSubItem">
                        <Link to={item.link} className="navSubItemText">{item.name}</Link>
                        {item.subItems && <SideBarItems subItems={item.subItems}/>}
                    </Nav.Item>
                ))}
            </>
        )
    }
}

export default SideBarItems
