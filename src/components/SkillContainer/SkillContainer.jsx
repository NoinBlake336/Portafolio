import React from 'react'
import { ContainerSectionSkillStyled, ContainerSkillStyled, ContainerTitleSkillStyled } from './SkillContainerStyled';
import SkillCard from './SkillCard';

const SkillContainer = () => {
  return (
    <ContainerSectionSkillStyled>
        <ContainerTitleSkillStyled>
            <span class="text">Habilidades &amp; Herramientas</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 8l-4 4l4 4"></path>
                        <path d="M17 8l4 4l-4 4"></path>
                        <path d="M14 4l-4 16"></path>
            </svg>
        </ContainerTitleSkillStyled>
        <ContainerSkillStyled>
            
        </ContainerSkillStyled>
    </ContainerSectionSkillStyled>
  )
}

export default SkillContainer