import React, { useState } from 'react'
import { SliderData } from './Data'
import { MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.lenght;

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
          <MdArrowBackIos onClick={prevSlide}/>
        </LeftArrow>
        <RightArrow>
          <MdArrowForwardIos onClick={nextSlide}/>
        </RightArrow>
        {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
        })}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
