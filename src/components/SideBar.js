import React, { Component } from "react"
import {Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import './SideBar.css'

class SideBar extends Component {
    static defaultProps = {
        items: [
            {
                name:'Dummy Link 1',
                link:'/services/botbuilder'
            }, 
            {
                name:'Dummy Link 2',
                link:'/services/botbuilder'
            }
        ]
    }
    
    render() {
        const sideBarItems = this.props.items.sideLinks.map((item,index) => {
            return (
            <Nav.Item key={index} className="navItem">
                <Link to={item.link} className="navItemText">{item.name}</Link>
            </Nav.Item>
            )
        })

        return (
            <>
                <div className="gap"></div>
                    <Nav className="col-md-12 d-none d-md-block sidebar">
                        <div className="sidebar-sticky"></div>
                        {sideBarItems}
                    </Nav>
                <div className="gap"></div>
            </>
            )
    }
}

export default SideBar