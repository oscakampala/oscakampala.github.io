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
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
  
      </div>
    )
  }