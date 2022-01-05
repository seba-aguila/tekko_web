import React from 'react'
import empresa from '../../images/business.svg'
import desarrolloWeb from '../../images/html.svg'
import finanzas from '../../images/finanzas_personales.svg'
import curriculum from '../../images/interview.svg'
import charlas from '../../images/charlas1.svg'
import tiempo from '../../images/tiempo.svg'
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
          <ContentsIcon src={empresa}/>
          <ContentsH2>Áreas de una Empresa</ContentsH2>
          <ContentsP>
            Ventas, organización y programación en una empresa de desarrollo de software.
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={desarrolloWeb}/>
          <ContentsH2>Herramientas<br />de Desarrollo</ContentsH2>
          <ContentsP>
            Git (Bitbucket), Jira, Slack, Servidores, Laravel, entre otras.
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={finanzas}/>
          <ContentsH2>Finanzas Personales</ContentsH2>
          <ContentsP>
            <br />Importancia de tener cuenta corriente, de ahorrar e invertir.
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={curriculum}/>
          <ContentsH2>Elaboración Curriculum</ContentsH2>
          <ContentsP>
            Estructura y elaboración óptima de tu curriculum laboral.
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={charlas}/>
          <ContentsH2>Charlas</ContentsH2>
          <ContentsP>
            Charlas acerca de diferentes áreas de interés: entrevistas, videojuegos, etc.
          </ContentsP>
        </ContentsCard>
        <ContentsCard>
          <ContentsIcon src={tiempo}/>
          <ContentsH2>Manejo de Tiempo</ContentsH2>
          <ContentsP>
            Administración del tiempo personal: Google Calendar, Trello, etc.
          </ContentsP>
        </ContentsCard>
      </ContentsWrapper>
    </ContentsContainer>
  );
}

export default Contents
