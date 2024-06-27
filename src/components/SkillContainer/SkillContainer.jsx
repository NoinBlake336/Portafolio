import React from 'react'
import { ContainerSectionSkillStyled, ContainerSkillStyled, ContainerTitleSkillStyled } from './SkillContainerStyled';
import SkillCard from './SkillCard';
import { skillData } from '../../data/skill';
import NeonDots from '../Animations/NeonDots/NeonDots';
import { useTranslate } from '../../context/Translate';

const SkillContainer = () => {
  const {isTranslate} = useTranslate();
  return (
    <ContainerSectionSkillStyled>
        <ContainerTitleSkillStyled>
            {isTranslate 
              ?
                <span class="text">Skills & Tools</span>
              : 
                <span class="text">Habilidades &amp; Herramientas</span>
            }
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 8l-4 4l4 4"></path>
                        <path d="M17 8l4 4l-4 4"></path>
                        <path d="M14 4l-4 16"></path>
            </svg>
        </ContainerTitleSkillStyled>
        <ContainerSkillStyled>
            {
              skillData.map((skill)=>{
                return <SkillCard img={skill.img} lazy={skill.lazy} name={skill.name} skill={skill.skill} colorData={skill.color} key={skill.id} />
              })
            }
        </ContainerSkillStyled>
        <NeonDots />
    </ContainerSectionSkillStyled>
  )
}

export default SkillContainer