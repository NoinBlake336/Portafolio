import React from 'react'
import { ButtonView, CardContainerService, ContainerButtonView, ContainerTitle, DescriptionContainer, LimitText, ListContaints } from './CardServicesStyled'
import { SpacerStyled } from '../../Footer/FooterStyled'

const CardsServices = ({name, description, children, isDisabled, pdf, text}) => {
  return (
    <CardContainerService>
      <ContainerTitle>
        <SpacerStyled color={'white'}/>
        {name}
        <SpacerStyled color={'white'}/>
      </ContainerTitle>
      <DescriptionContainer>
        {description}
      </DescriptionContainer>
      <LimitText>
        <p>Contenido: </p>
      </LimitText>
      <ListContaints>
        {children}
      </ListContaints>
      <ContainerButtonView>
        <ButtonView href={pdf} disabled={ isDisabled } style={{ opacity: isDisabled ? 0.5 : 1 }} download>{ text }</ButtonView>
      </ContainerButtonView>
    </CardContainerService>
  )
}

export default CardsServices