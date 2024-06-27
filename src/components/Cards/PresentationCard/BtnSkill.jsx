import React from 'react'
import { ButtonSkill } from './PresentationCardStyled'

const BtnSkill = ({img}) => {
  return (
    <ButtonSkill>
        <img src={img} alt="" />
    </ButtonSkill>
  )
}

export default BtnSkill