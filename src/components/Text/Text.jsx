import React from 'react'
import { TextStyled } from './TextStyled'

const Text = ({children}) => {
  return (
    <TextStyled>
        {children}
    </TextStyled>
  )
}

export default Text