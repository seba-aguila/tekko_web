import React from 'react'
import Video from '../../videos etc'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home" >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
