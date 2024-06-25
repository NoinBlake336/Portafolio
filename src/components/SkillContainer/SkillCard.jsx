import React from 'react'
import { BackgroundColorCardStyled, ContainerCardStyled, InfoCardStyled } from './SkillContainerStyled'

const SkillCard = ({img, lazy, name, skill}) => {
  return (
    <ContainerCardStyled>
        <BackgroundColorCardStyled>
            <img src={img} alt="" />
        </BackgroundColorCardStyled>
        <InfoCardStyled>
            <img src={lazy} alt="" />
            <div>
                <span>{name}</span>
                <span>{skill}</span>
            </div>
        </InfoCardStyled>
    </ContainerCardStyled>
  )
}

export default SkillCard;