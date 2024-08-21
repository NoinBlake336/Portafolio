import React from 'react'
import { InputStyled, InputWrapper, LabelStyled } from './InputStyled'

const Input = ({ label, type = "text", name, placeholder, functions }) => {
  return (
    <InputWrapper>
        <LabelStyled htmlFor={name}>{label}</LabelStyled>
        <InputStyled type={type} name={name} id={name} placeholder={placeholder} onChange={functions} />
  </InputWrapper>
  )
}

export default Input