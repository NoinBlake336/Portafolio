import React, { useState } from 'react'
import {  ButtonMenuStyled, ContainerLogoStyled, HeaderContainerStyled, ItemsStyled, MobileMenuStyled, NavigateContainerStyled } from './NavBarStyled'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Links from '../Links/Links'
import MobileMenu from './MobileMenu'

const NavBar = () => {
    const navigate = useNavigate();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    
  return (
    <HeaderContainerStyled>
        <ContainerLogoStyled>
            <Logo />
            <NavigateContainerStyled>
                <ItemsStyled onClick={()=> navigate('/')}>
                    <span>Inicio</span>
                </ItemsStyled>
                <ItemsStyled onClick={()=> navigate('/projects')}>
                    <span>Proyectos</span>
                </ItemsStyled>   
            </NavigateContainerStyled>
        </ContainerLogoStyled>
        <Links/>
        <MobileMenuStyled>
            <ButtonMenuStyled onClick={toggleMobileMenu} >
                <svg id="btn-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path id="btn-menu" stroke="none" d="M0 0h24v24H0z" fill="none">
                    </path>
                    <path id="btn-menu" d="M4 6l16 0">

                    </path>
                    <path id="btn-menu" d="M4 12l16 0">

                    </path>
                    <path id="btn-menu" d="M4 18l16 0">

                    </path>
                </svg>
            </ButtonMenuStyled>
            <MobileMenu isHidden={openMobileMenu} />
        </MobileMenuStyled>
    </HeaderContainerStyled>
  )
}

export default NavBar