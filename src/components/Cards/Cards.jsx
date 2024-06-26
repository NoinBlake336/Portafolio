import React from 'react'
import { ContainerCardsStyled, SectionCardsStyled } from './CardsStyle'
import Card from './Card'
import { projectsData } from '../../data/proyects'

const Cards = () => {
  return (
    <SectionCardsStyled>
        <ContainerCardsStyled>
            {
                projectsData.map((card)=>{
                    return <Card  category={card.span} img={card.img} title={card.title} description={card.description} items={card.skills} />
                })
            }
        </ContainerCardsStyled>
    </SectionCardsStyled>
  )
}

export default Cards

