import React from 'react'
import Icon1 from '../../images/undraw_code_thinking_re_gka2.svg'
import Icon2 from '../../images/undraw_stars_re_6je7.svg'
import Icon3 from '../../images/undraw_to_the_stars_qhyy.svg'
import {
  ContentsContainer,
  ContentsH1,
  ContentsWrapper,
  ContentsCard,
  ContentsIcon,
  ContentsH2,
  ContentsP
} from './ContentsElements'

const Contents = () => {
  return (
    <ContentsContainer id="contenidos">
      <ContentsH1>Temas a tratar</ContentsH1>
      <ContentsWrapper>
        <ContentsCard>
          <ContentsIcon src={Icon1}/>
          <ContentsH2>Finanzas</ContentsH2>
          <ContentsP>
            A mi no me gusta cuando tu te enojai'
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={Icon2}/>
          <ContentsH2>NGMI</ContentsH2>
          <ContentsP>
            Pero a mi me encanta cuando tu te mojai'
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={Icon3}/>
          <ContentsH2>Once</ContentsH2>
          <ContentsP>
            Chupalo Entonce'
          </ContentsP>
        </ContentsCard>
      </ContentsWrapper>
    </ContentsContainer>
  );
}

export default Contents
