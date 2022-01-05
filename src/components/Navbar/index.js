import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
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


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Tekko</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='descubrenos'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Descúbrenos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='contenidos'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Contenidos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='equipo'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Equipo</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contacto'>Contacto</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
}
export default Navbar