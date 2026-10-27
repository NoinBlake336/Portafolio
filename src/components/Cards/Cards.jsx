import React from 'react'
import { ContainerCardsStyled, SectionCardsStyled } from './CardsStyle'
import Card from './Card'
import { itemPath } from '../../data/projectLookup'

const Cards = ({ cardlist, kind = 'project' }) => (
  <SectionCardsStyled>
    <ContainerCardsStyled>
      {cardlist.map((card) => (
        <Card
          key={`${kind}-${card.title}`}
          to={itemPath(card, kind)}
          category={card.span}
          img={card.img}
          desktopImg={card.desktopImg}
          isRecent={card.isRecent}
          inDevelopment={card.inDevelopment}
          isDesign={kind === 'design'}
          title={card.title}
          description={card.description}
          bg={card.bg}
        />
      ))}
    </ContainerCardsStyled>
  </SectionCardsStyled>
)

export default Cards
