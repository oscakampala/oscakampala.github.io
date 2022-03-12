import React from 'react';
import { Nav,NavbarText,Navbar,Collapse,NavbarBrand,NavbarToggler,NavItem,NavLink,UncontrolledDropdown,DropdownMenu,DropdownToggle,DropdownItem } from 'reactstrap';

export const NavBarComponent = () => {
    return (
      <div>

<div>
  <Navbar
    color="light" 
    expand="md" 
    light
  >
    <NavbarBrand href="/">
      <img width={55} height={55} src="/osca-logo.png" alt="OSCA Logo" />

    </NavbarBrand>

    {/* <NavbarToggler onClick={function noRefCheck(){}} /> */}
    <Collapse navbar>
      <Nav className="me-auto" > </Nav>
      
      <Nav
        navbar
      >
        <NavItem>
          <NavLink href="https://oscakampala.github.io/">
            About
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink href="https://oscakampala.github.io/festival">
            Summit 
          </NavLink>
        </NavItem>
         <NavItem>
          <NavLink href="https://oscakampala.github.io/events">
            Past events
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="">
            Projects
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="">
            Contact Us
          </NavLink>
        </NavItem>
       
      </Nav>

     
      
    </Collapse>
  </Navbar>
</div>
  
      </div>
    )
  }