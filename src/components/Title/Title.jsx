import React from 'react'
import { ContainerTitleStyled } from './TitleStyled'

const Title = ({title, icon }) => {
  return (
    <ContainerTitleStyled>
        <span>{title}</span>
        { icon }
    </ContainerTitleStyled>
  )
}


export default Title