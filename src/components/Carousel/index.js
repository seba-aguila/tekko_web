import React, { useState } from 'react'
import { SliderData } from './Data'
import { MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'
import { 
  CarouselContainer,
  CarouselH1,
  CarouselH2,
  CarouselP,
  Slider,
  LeftArrow,
  RightArrow,
  Slide,
  Image,
  Img
} from './CarouselElements';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <CarouselContainer id='testimonios'>
      <CarouselH1>Testimonios</CarouselH1>
      <Slider>
        <LeftArrow>
          <MdArrowBackIosNew onClick={prevSlide}/>
        </LeftArrow>
        <RightArrow>
          <MdArrowForwardIos onClick={nextSlide}/>
        </RightArrow>
        {SliderData.map((slide, index) => {
          return (
            <Slide
              className={index === current ? 'active' : ''}
              key={index}
            >
              {index === current && (
                <>
                  <Img><Image src={slide.image} alt='retrato'/></Img>
                  <CarouselH2>{slide.name}</CarouselH2>
                  <CarouselP>{slide.text}</CarouselP>
                </>
              )}
            </Slide>
          );
        })}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
