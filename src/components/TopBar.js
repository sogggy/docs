import React, { Component } from 'react'
//import SearchBar from './SearchBar'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TopBar.css'
import TopBarDropdownOptions from './TopBarDropdownOptions' 

class TopBar extends Component {
    static defaultProps = {
        topbarDropdownHeaders: [],
        topbarLinks:[]
    }
    
    constructor(props) {
        super(props);
        this.state = {
          show: true,
          scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    render() {
        const { onClickLink, topbarLinks, topbarDropDownHeaders } = this.props
        const topbarDropdownOptions = (index) => {
            return topbarDropDownHeaders[index].dropdownOptions.map((item, index) => (
                <TopBarDropdownOptions item={item} key={index}/>
            ))
        }

        const topbarDropDownHeader = topbarDropDownHeaders.map((item, index) => (
            <NavDropdown title={item.title} id="basic-nav-dropdown" key={index} renderMenuOnMount={true}>
                {topbarDropdownOptions(index)}
            </NavDropdown>
        ))

        const topbarLink = topbarLinks.map((item, index) => (
            <Nav.Link href={item.link} onClick={onClickLink} key={index} id="nav-link">{item.name}</Nav.Link>
        ))
        return (
        <Navbar expand="lg" className="topbar" variant="dark" id={this.state.show ? "active" : "hidden"}>
            <Link to='/'>
                <Navbar.Brand href="#">
                    Vouch
                </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {topbarDropDownHeader}
                    {topbarLink}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default TopBar