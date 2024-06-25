import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyled'
import NavBar from '../NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <LayoutContainerStyled>
        <NavBar />
        <ContentContainerStyled>{children}</ContentContainerStyled>
    </LayoutContainerStyled>
  )
}

export default Layout