import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const CarouselH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  /* margin-bottom: 64px; */

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const CarouselH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
`;

export const CarouselP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

export const Slider = styled.section`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const LeftArrow = styled.a`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled.a`
  position: absolute;
  top: 50%;
  right: 0px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

  &.active{
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;