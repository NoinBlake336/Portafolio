import React from 'react'
import { AllRigthReservationsStyled, ContainerFooterStyled, PrincipalStyled, SpacerStyled } from './FooterStyled'
import Logo from '../Logo/Logo'
import Links from '../Links/Links'

const Footer = () => {
  return (
    <ContainerFooterStyled>
        <PrincipalStyled>
            <Logo/>
            <SpacerStyled />
            <AllRigthReservationsStyled>
                <p>© 2024 NoinDev. Todos los derechos reservados.</p>
            </AllRigthReservationsStyled>
        </PrincipalStyled>
        <Links/>  
    </ContainerFooterStyled>
  )
}

export default Footer