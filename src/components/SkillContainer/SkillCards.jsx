import React from 'react'
import { BackgroundColorCardStyled, ContainerCardStyled, InfoCardStyled } from './SkillContainerStyled'

const SkillCards = ({img, lazy, name, category}) => {
  return (
    <ContainerCardStyled>
        <BackgroundColorCardStyled>
            <img src={img} alt="" />
        </BackgroundColorCardStyled>
        <InfoCardStyled>
            <img src={lazy} alt="" />
            <div>
                <span>{name}</span>
                <span>{category}</span>
            </div>
        </InfoCardStyled>
    </ContainerCardStyled>
  )
}

export default SkillCards