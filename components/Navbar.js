import {useState} from 'react';
import { Nav,Navbar,NavbarBrand,NavItem,NavLink,NavbarToggler,Collapse} from 'reactstrap';

export const NavBarComponent = () => {

  const [collapsed,setCollapsed]=useState(false)

    const toggleNavbar=()=>{
     // if(collapsed) setCollapsed(true);

      setCollapsed(true)

        }
        
    return (
      <div>

<div>
  <Navbar  scrolling dark expand="md" fixed="top">

    <NavbarBrand href="/">
      <img width={55} height={55} src="/osca-logo.png" alt="OSCA Logo" />

    </NavbarBrand>

    <NavbarToggler  className="mr-2" onClick={toggleNavbar} />

    <Collapse isOpen={collapsed} navbar>    
      <Nav
      className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="https://oscakampala.github.io/" className='text-light' >
            About
          </NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink href="https://oscakampala.github.io/festival" className='text-light' >
            Summit 
          </NavLink>
        </NavItem>
         <NavItem>
          <NavLink href="https://oscakampala.github.io/events" className='text-light' >
            Past events
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="" className='text-light' >
            Projects
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="" className='text-light' >
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