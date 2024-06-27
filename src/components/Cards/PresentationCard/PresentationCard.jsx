import React from 'react'
import { CardContainerStyed, ContainerButtonSkill, ContainerPresentationCard, ContiainerImgStyled, ItemsContianerStyled, ItemsStyled, PageInfromatinContainer } from './PresentationCardStyled'
import AboutProfile from '../../AboutMeContainer/AboutProfile'
import Casa from '../../../assets/casaPlus.png'
import BtnSkill from './BtnSkill'
const PresentationCard = () => {
  return (
    <ContainerPresentationCard>
        <CardContainerStyed>
            <ItemsContianerStyled>
                <ItemsStyled/>
                <ItemsStyled/>
                <ItemsStyled/>
            </ItemsContianerStyled>
            <PageInfromatinContainer>

            </PageInfromatinContainer>
            <ContiainerImgStyled>
                <AboutProfile img={Casa} />
                <ContainerButtonSkill>
                    <BtnSkill img={''}/>
                    <BtnSkill img={''}/>
                </ContainerButtonSkill>
            </ContiainerImgStyled>
        </CardContainerStyed>
    </ContainerPresentationCard>
  )
}

export default PresentationCard