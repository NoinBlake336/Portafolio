import React from 'react'
import { CardImageStyled, CardInfromationStyled, CardProjectStyled, SkillItemsStyle, UlSkillContainerStyle } from './CardsStyle'

const Card = ({link,category,title, img, description, items, bg}) => {

  return (
    <CardProjectStyled href={link} to={title}>
        <CardImageStyled bg={bg}>
            <span>{ category }</span>
            <img src={img} alt={title} />
        </CardImageStyled>
        <CardInfromationStyled>
            <h5>{ title }</h5>
            <p>{ description }</p>
            <UlSkillContainerStyle>
                {
                    items.map((skill) => {
                        return <SkillItemsStyle>
                            <img src={skill} alt={ category } />
                        </SkillItemsStyle>
                    })
                }
            </UlSkillContainerStyle>
        </CardInfromationStyled>
    </CardProjectStyled>
  )
}

export default Card