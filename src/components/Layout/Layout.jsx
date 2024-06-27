import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyled'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
const Layout = ({children}) => {
  return (
    <LayoutContainerStyled>
        <NavBar />
        <ContentContainerStyled>{children}</ContentContainerStyled>
        <Footer />
    </LayoutContainerStyled>
  )
}

export default Layout