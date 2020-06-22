import React, { Component } from "react"
import {Nav} from "react-bootstrap"
import { HashLink as Link } from 'react-router-hash-link'
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
    
    constructor(props) {
        super(props)
        this.iterateSubItems = this.iterateSubItems.bind(this)
    }
    
    iterateSubItems(subItemArr) {
        console.log(subItemArr)
        if (subItemArr === undefined) {
            return
        } else { 
            subItemArr.map((item, index) => {
                if (item.subItems) {
                    return (
                        <Nav.Item key={index} className="navSubItem">
                            <Link to={item.link} className="navSubItemText">{item.name}</Link>
                            {this.iterateSubItems(item.subItems)}
                        </Nav.Item>
                    )
                } else {
                    return (
                        <Nav.Item key={index} className="navSubItem">
                            <Link to={item.link} className="navSubItemText">{item.name}</Link>
                        </Nav.Item>
                    )
                }
            })
        }
    }

    render() {
        // const sideBarItems = this.props.items.sideLinks.map((item,index) => {
        //     return (
        //     <Nav.Item key={index} className="navItem">
        //         <Link to={item.link} className="navItemText">{item.name}</Link>
        //     </Nav.Item>
        //     )
        // })
        //console.log(this.props.items)
        const sideBarItems = this.iterateSubItems(this.props.items.subItems)
        console.log(sideBarItems)
        return (
            <>
                <div className="gap"></div>
                    <Nav className="col-md-12 d-none d-md-block sidebar">
                        <div className="sidebar-sticky"></div>
                        {sideBarItems}
                        <Nav.Item key="1" className="navItem">
                            <Link to="#inline_func" className="navItemText">Inline Func</Link>
                            <Nav.Item key="1" className="navItem">
                                <Link to="#htmlstrip" className="navItemText">HTML Strip</Link>
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                <div className="gap"></div>
            </>
            )
    }
}

export default SideBar