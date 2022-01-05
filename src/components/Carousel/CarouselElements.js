import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 800px;
  width:  600px;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const CarouselH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const Slider = styled.section`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
