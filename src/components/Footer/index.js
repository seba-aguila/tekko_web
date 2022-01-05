import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Acerca de</FooterLinkTitle>
              <FooterLink to='descubrenos'>Descúbrenos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Temas</FooterLinkTitle>
              <FooterLink to='contenidos'>Contenidos</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink to='equipo'>Equipo</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes sociales</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>Tekko</SocialLogo>
            <WebsiteRights> Tekko @ 2022 All rights reserved perrits</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.instagram.com/danbilzerian" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com/zssbecker" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer