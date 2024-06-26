import React from 'react'
import { BackgroundColorCardStyled, ContainerCardStyled, FigureColorStyled, InfoCardStyled } from './SkillContainerStyled'

const SkillCard = ({img, lazy, name, skill, colorData}) => {
  return (
    <ContainerCardStyled>
        <BackgroundColorCardStyled>
            <img src={img} alt="" />
        </BackgroundColorCardStyled>
        <InfoCardStyled>
            <FigureColorStyled colorsData={colorData}>
              <img src={lazy} alt="" />
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