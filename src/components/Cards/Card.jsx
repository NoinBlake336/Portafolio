import React from 'react'
import { CardImageStyled, CardInfromationStyled, CardProjectStyled, SkillItemsStyle, UlSkillContainerStyle } from './CardsStyle'

const Card = ({category,title, img, description, items}) => {
  return (
    <CardProjectStyled>
        <CardImageStyled>
            <span>{ category }</span>
            <img src={img} alt="" />
        </CardImageStyled>
        <CardInfromationStyled>
            <h5>{ title }</h5>
            <p>{ description }</p>
            <UlSkillContainerStyle>
                {
                    items.map((skill) => {
                        return <SkillItemsStyle>
                            <img src={skill} alt="" />
                        </SkillItemsStyle>
                    })
                }
            </UlSkillContainerStyle>
        </CardInfromationStyled>
    </CardProjectStyled>
  )
}

export default Card