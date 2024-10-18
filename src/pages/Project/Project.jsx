import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslate } from '../../context/Translate'
import { designsEn, designsEs, projectsDataEn, projectsDataEs } from '../../data/projects';
import { BlockquoteStyled, ContainerBlockquoteStyled, ContainerImgStyled, ContainerListOfSkillStyled, ContainerPageLinkStyled, ContainerProjectAboutStyled, SectionContainerProjectStyled, SkillProjectStyled } from './PorjectStyled';
import NeonDots from '../../components/Animations/NeonDots/NeonDots'
import Circle from '../../components/Animations/Circle/Circle';
const Project = () => {
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    let object = null;
    const { isTranslate } = useTranslate();
    const { project } = useParams();

    if(!isTranslate){
        designsEn.find(item => item.title === project ? object = item : false );
        projectsDataEn.find(item => item.title === project ? object = item : false );
    }else{
        projectsDataEs.find(item => item.title === project ? object = item : false );
        designsEs.find(item => item.title === project ? object = item : false);
    }
    const { description, img, link, skills, skillsName, span, title } = object;
    
  return (
    <SectionContainerProjectStyled>
      <ContainerImgStyled>
        <img src={img} alt={title} sizes="(max-width: 768px) 600px, (max-width: 1200px) 800px, 960px" />
        <ContainerProjectAboutStyled>
          <h1>{ title }</h1>
          <ContainerListOfSkillStyled>
            <SkillProjectStyled>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-600 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
              2024-04-05
            </SkillProjectStyled>
            <SkillProjectStyled>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-600 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path></svg>
              {
                span
              }
            </SkillProjectStyled>
            <SkillProjectStyled>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-600 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path></svg>
              <p>
                {
                  skillsName?.map((skill, index) => (
                    <span key={index}>
                      {capitalizeFirstLetter(skill)}
                      {index < skillsName.length - 1 ? ", " : ""}
                    </span>
                  ))
                }
              </p>
            </SkillProjectStyled>
          </ContainerListOfSkillStyled>
          <ContainerPageLinkStyled>
            <a href={ link } target="_blank">
              Ir al sitio
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"   stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                </path>
              </svg>
            </a>
          </ContainerPageLinkStyled>

        </ContainerProjectAboutStyled>
      </ContainerImgStyled>
      <ContainerBlockquoteStyled>
        <BlockquoteStyled>
          {
            description
          }
        </BlockquoteStyled>
      </ContainerBlockquoteStyled>
      <NeonDots/>
    </SectionContainerProjectStyled>
  )
}

export default Project