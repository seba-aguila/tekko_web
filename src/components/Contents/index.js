import React from 'react'
import {ContentsContainer, ContentsH1, ContentsWrapper, ContentsCard, ContentsIcon, ContentsH2, ContentsP} from './ContentsElements'

const Contents = () => {
  return (
    <ContentsContainer id="temas">
      <ContentsH1>Temas a tratar</ContentsH1>
      <ContentsWrapper>
        <ContentsCard>
          <ContentsIcon src={Icon1}/>
          <ContentsH2>Finanzas</ContentsH2>
          <ContentsP>
            A mi no me gusta cuando tu te enojai 
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={Icon2}/>
          <ContentsH2>NGMI</ContentsH2>
          <ContentsP>
            LOLOLOLO 
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={Icon2}/>
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
