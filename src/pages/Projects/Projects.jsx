import React, { useState } from 'react'
import { ContainerMain, FilterContainer, FilterButton } from './ProjectStyled'
import Title from '../../components/Title/Title'
import Cards from '../../components/Cards/Cards'
import { MdPalette } from "react-icons/md";
import { designsEn, designsEs, projectsDataEn, projectsDataEs } from '../../data/projects';
import NeonDots from '../../components/Animations/NeonDots/NeonDots';
import { useTranslate } from '../../context/Translate';

const Projects = () => {
  const { isTranslate } = useTranslate();
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'recent' | 'systems' | 'design'

  const rawProjects = isTranslate ? projectsDataEn : projectsDataEs;
  const rawDesigns = isTranslate ? designsEn : designsEs;

  const showSystems = activeFilter === 'all' || activeFilter === 'systems' || (activeFilter === 'recent' && rawProjects.some(p => p.isRecent));
  const showDesigns = activeFilter === 'all' || activeFilter === 'design' || (activeFilter === 'recent' && rawDesigns.some(d => d.isRecent));

  const filteredProjects = activeFilter === 'recent' 
    ? rawProjects.filter(p => p.isRecent) 
    : rawProjects;

  const filteredDesigns = activeFilter === 'recent' 
    ? rawDesigns.filter(d => d.isRecent) 
    : rawDesigns;

  return (
    <ContainerMain id="proyectos">
      {/* Category & Recent Deliverables Filter */}
      <FilterContainer>
        <FilterButton
          type="button"
          $active={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
        >
          {isTranslate ? 'Todos los Proyectos' : 'All Projects'}
        </FilterButton>

        <FilterButton
          type="button"
          $active={activeFilter === 'recent'}
          onClick={() => setActiveFilter('recent')}
        >
          {isTranslate ? 'Entregados Recientemente' : 'Recently Delivered'}
        </FilterButton>

        <FilterButton
          type="button"
          $active={activeFilter === 'systems'}
          onClick={() => setActiveFilter('systems')}
        >
          {isTranslate ? 'Sistemas & ERP' : 'Systems & ERP'}
        </FilterButton>

        <FilterButton
          type="button"
          $active={activeFilter === 'design'}
          onClick={() => setActiveFilter('design')}
        >
          {isTranslate ? 'Identidad & Marca' : 'Brand & Design'}
        </FilterButton>
      </FilterContainer>

      {/* Systems Section */}
      {showSystems && (
        <>
          <Title 
            title={
              activeFilter === 'recent'
                ? (isTranslate ? 'Sistemas & ERP Entregados Recientemente' : 'Recently Delivered ERP Systems')
                : (isTranslate ? 'Sistemas & Proyectos' : 'Systems & Solutions')
            } 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
            }
          />
          <Cards cardlist={filteredProjects} kind="project"/>
        </>
      )}

      {/* Brand & UI Design Section */}
      {showDesigns && (
        <>
          <Title 
            title={
              activeFilter === 'recent'
                ? (isTranslate ? 'Diseño & Marca Entregados Recientemente' : 'Recently Delivered Branding')
                : (isTranslate ? 'Diseño & Identidad de Marca' : 'Brand & UI Design')
            } 
            icon={ <MdPalette/> }
          />
          <Cards cardlist={filteredDesigns} kind="design"/>
        </>
      )}

      <NeonDots/>
    </ContainerMain>
  )
}

export default Projects