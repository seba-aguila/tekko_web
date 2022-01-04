import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='descubrenos' onClick={toggle}>Descubrenos</SidebarLink>
          <SidebarLink to='temas' onClick={toggle}>Temas</SidebarLink>
          <SidebarLink to='equipo' onClick={toggle}>Equipo</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contacto'>Contacto</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar