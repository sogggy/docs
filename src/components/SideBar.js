import React, { Component } from "react"
import {Nav} from "react-bootstrap"
import './SideBar.css'
import SideBarItems from './SideBarItems'

class SideBar extends Component {
    static defaultProps = {
        items: []
    }

    render() {
        const { sideLinks } = this.props.items
        return (
            <>
                <div className="gap"></div>
                    <Nav className="col-md-12 d-none d-md-block sidebar">
                        <div className="sidebar-sticky"></div>
                        <SideBarItems subItems={sideLinks} />
                    </Nav>
                <div className="gap"></div>
            </>
            )
    }
}

export default SideBar