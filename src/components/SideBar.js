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
        const sideBarItems = this.props.items.map((item,index) => {
            return (
            <Nav.Item key={index} className="navItem">
                <Link to={item.link}>{item.name}</Link>
            </Nav.Item>
            )
        })

        return (
            <>
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky"></div>
                    {sideBarItems}
                </Nav>
            </>
            )
    }
}

export default SideBar