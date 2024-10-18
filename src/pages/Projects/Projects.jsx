import React from 'react'
import { ContainerMain } from './ProjectStyled'
import Title from '../../components/Title/Title'
import Cards from '../../components/Cards/Cards'
import { MdPalette } from "react-icons/md";
import { designsEn, designsEs, projectsDataEn, projectsDataEs } from '../../data/projects';
import NeonDots from '../../components/Animations/NeonDots/NeonDots';
import {useTranslate} from '../../context/Translate';

const Projects = () => {
  const { isTranslate } = useTranslate()
  return (
    <ContainerMain>
      {
        isTranslate
        ? (<>
          <Title 
            title={'Projects'} 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
          }/>
          <Cards cardlist={projectsDataEn}/>
          <Title 
            title={'Designs'} 
            icon={ <MdPalette/> }
            />
          <Cards cardlist={designsEn}/>

        </>)
        : (<>
          <Title 
            title={'Proyectos'} 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                }
          />
          <Cards cardlist={projectsDataEs}/>
          <Title 
            title={'Diseños'} 
            icon={ <MdPalette/> }/>
          <Cards cardlist={designsEs} />
        </>)
      }
      <NeonDots/>
    </ContainerMain>
  )
}

export default Projects