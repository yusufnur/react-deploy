import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
        <NavbarBrand>Desa Ngasinan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/react-deploy">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://desangasinan.com/profil-2/">About us</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Admin</NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;