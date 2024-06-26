import React from 'react'
import { ArticleMobileMenuStyled, ButtonMobileMenuStyled, ContainerMobileMenuStyled } from './NavBarStyled'
import { useNavigate } from 'react-router-dom'

const MobileMenu = ({isHidden}) => {
    const navigate = useNavigate();
  return (
    <ArticleMobileMenuStyled isHidden={isHidden}>
        <ContainerMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={()=> navigate('/')}>
                <span>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home icon">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </ButtonMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={()=> navigate('/projects')} >
                <span>Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard icon">
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
            </ButtonMobileMenuStyled>
        </ContainerMobileMenuStyled>
    </ArticleMobileMenuStyled>
  )
}

export default MobileMenu