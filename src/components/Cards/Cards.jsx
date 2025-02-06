import React from 'react'
import { ContainerCardsStyled, SectionCardsStyled } from './CardsStyle'
import Card from './Card'

const Cards = ({cardlist}) => {
  return (
    <SectionCardsStyled>
        <ContainerCardsStyled>
          {
            cardlist.map((card)=>{
              return <Card link={card.link}  category={card.span} img={card.img} title={card.title} description={card.description} items={card.skills} bg={card?.bg} />
            })
            
          } 
        </ContainerCardsStyled>
    </SectionCardsStyled>
  )
}

export default Cards

