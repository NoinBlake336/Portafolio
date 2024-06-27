import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyled'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import CV from '../CV/CV'
const Layout = ({children}) => {
  return (
    <LayoutContainerStyled>
        <NavBar />
        <ContentContainerStyled>{children}</ContentContainerStyled>
        <Footer />
        <CV/>
    </LayoutContainerStyled>
  )
}

export default Layout