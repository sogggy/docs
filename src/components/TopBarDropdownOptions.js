import React from 'react'
import { NavDropdown } from 'react-bootstrap'


function TopBarDropdownOptions(props) {
    const { item } = props
    return (
        <NavDropdown.Item href={item.link}>{item.name}</NavDropdown.Item>
    )
}

export default TopBarDropdownOptions