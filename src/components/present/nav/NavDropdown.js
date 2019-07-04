import React from 'react'

const NavDropdown = (props) => {


    return <NavDropdown>
  <NavDropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </NavDropdown.Toggle>

  <NavDropdown.Menu>
    <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
  </NavDropdown.Menu>
</NavDropdown>

}
export default NavDropdown