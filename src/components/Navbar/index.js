import React from "react";
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Tekko</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="descubrenos">Descubrenos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="temas">Temas a Tratar</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="equipo">Equipo</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contacto">Contacto</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
export default Navbar