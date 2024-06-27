import React from 'react'
import { AboutMeFigureStyled, ContianerImgStyled } from './AboutMeContainerStyled'

const AboutProfile = ({img}) => {
  return (
    <AboutMeFigureStyled>
        <ContianerImgStyled>
            <img src={img} alt="" />
        </ContianerImgStyled>
    </AboutMeFigureStyled>
  )
}

export default AboutProfile