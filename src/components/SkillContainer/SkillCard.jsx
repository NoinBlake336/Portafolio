import React from 'react'
import { BackgroundColorCardStyled, ContainerCardStyled, FigureColorStyled, InfoCardStyled } from './SkillContainerStyled'

const SkillCard = ({img, lazy, name, skill, colorData}) => {
  return (
    <ContainerCardStyled>
        <BackgroundColorCardStyled>
            <img loading="lazy" decoding="async" src={img} alt="" />
        </BackgroundColorCardStyled>
        <InfoCardStyled>
            <FigureColorStyled colorsData={colorData}>
              <img loading="lazy" decoding="async" src={lazy} alt="" />
            </FigureColorStyled>
            <div>
                <span>{name}</span>
                <span>{skill}</span>
            </div>
        </InfoCardStyled>
    </ContainerCardStyled>
  )
}

export default SkillCard;