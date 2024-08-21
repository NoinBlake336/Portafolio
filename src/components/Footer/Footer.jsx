import React from 'react'
import { AllRigthReservationsStyled, ContainerFooterStyled, PrincipalStyled, SpacerStyled } from './FooterStyled'
import Logo from '../Logo/Logo'
import Links from '../Links/Links'
import { useTranslate } from '../../context/Translate'

const Footer = () => {
  const { isTranslate } = useTranslate()
  return (
    <ContainerFooterStyled>
        <PrincipalStyled>
            <Logo/>
            <SpacerStyled color={'var(--header-spacer-color)'}/>
            <AllRigthReservationsStyled>
                {
                  isTranslate 
                  ?      
                  <p>© 2024 NoinDev. All rights reserved.</p>
                  : 
                  <p>© 2024 NoinDev. Todos los derechos reservados.</p>
                }
            </AllRigthReservationsStyled>
        </PrincipalStyled>
        <Links/>  
    </ContainerFooterStyled>
  )
}

export default Footer