import React, { Component } from 'react'
import SearchBar from './SearchBar'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TopBar.css'

class TopBar extends Component {
    static defaultProps = {
        topbarDropdownHeaders: [
            {
                title:'User Manual',
                dropdownOptions: [
                    {
                        name:'BotBuilder Auth',
                        link:'/user-manual/auth'
                    }
                ]
            }
        ],
        topbarLinks:[
            {
                link:'/api/widget/',
                name:'APIs'
            }
        ]
    }
    
    render() {
        const { onClickLink } = this.props
        const topbarDropdownOptions = (index) => {
            return this.props.topbarDropdownHeaders[index].dropdownOptions.map((item, index) => (
            <NavDropdown.Item href={item.link} key={index}>{item.name}</NavDropdown.Item>
            ))
        }

        const topbarDropDownHeaders = this.props.topbarDropdownHeaders.map((item, index) => (
            <NavDropdown title={item.title} id="basic-nav-dropdown" key={index}>
                {topbarDropdownOptions(index)}
            </NavDropdown>
        ))

        const topbarLinks = this.props.topbarLinks.map((item, index) => (
            <Nav.Link href={item.link} onClick={onClickLink} key={index} id="nav-link">{item.name}</Nav.Link>
        ))
        return (
        <Navbar expand="lg" className="topbar" variant="dark">
        <Link to='/'>
            <Navbar.Brand href="#">
                Vouch
            </Navbar.Brand></Link>
            {/* might replace with image in the future */}
            {/* <img 
            src="" 
            alt="Vouch"
            style={{}}
            /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {topbarDropDownHeaders}
                {topbarLinks}
            </Nav>
            <SearchBar />
        </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default TopBar