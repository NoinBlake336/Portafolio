import React from 'react'
import { AboutMeContentStyled, AboutMeFigureStyled, ContainerAboutMeStyled, ContainerSectionStyled, ContianerImgStyled} from './AboutMeContainerStyled'
import { ContainerTitleSkillStyled } from '../SkillContainer/SkillContainerStyled'
import Text from '../Text/Text'
import Profile from '../../assets/profile.png';
import { useTranslate } from '../../context/Translate';
const AboutMeContainer = () => {
    const { isTranslate } = useTranslate()
  return (
    <ContainerSectionStyled>
        {
            isTranslate 
            ?
            (<>
                <ContainerTitleSkillStyled>
                    <span>About Me</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                        <path d="M15 19l2 2l4 -4"></path>
                    </svg>            
                </ContainerTitleSkillStyled>
                <ContainerAboutMeStyled>
                    <AboutMeContentStyled>
                        <Text>
                            I am 
                            <span> José Chocobar</span>
                            , an enthusiast of backend development with a passion for creation and innovation. Currently, I am deeply involved in the world of backend development, especially exploring the possibilities offered by
                            <span> C#</span>.
                        </Text>
                        <Text>
                        Throughout my career, I have had the pleasure of bringing various innovative projects to life that have challenged my skills and creativity. From e-commerce to database management systems, each project has given me the opportunity to learn and grow as a developer.
                        </Text>
                        <Text>
                        What I enjoy most is working in a team, collaborating with other tech enthusiasts, and facing challenges together. Additionally, I have a preference for design, always seeking the perfect balance between functionality and aesthetics in my projects.
                        </Text>
                        <Text>
                        At only 
                        <span> 20 years old</span>
                        , I am determined to continue improving my backend skills and expanding my software development experience. My goal is to become an exceptional developer capable of creating innovative solutions that positively impact people's lives.
                        </Text>
                    </AboutMeContentStyled>
                    <AboutMeFigureStyled>
                        <ContianerImgStyled>
                            <img src={Profile} alt="" />
                        </ContianerImgStyled>
                    </AboutMeFigureStyled>
                </ContainerAboutMeStyled>          
            </>)
            :
            (<>
                <ContainerTitleSkillStyled>
                    <span>Sobre Mi</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                <path d="M15 19l2 2l4 -4"></path>
                            </svg>            
                </ContainerTitleSkillStyled>
                <ContainerAboutMeStyled>
                    <AboutMeContentStyled>
                        <Text>
                            Soy 
                            <span> José Chocobar</span>
                            , un entusiasta del backend con pasión por la creación y la innovación. Actualmente, estoy profundamente involucradome en el mundo del desarrollo backend, especialmente explorando las posibilidades que ofrece
                            <span> C#</span>.
                        </Text>
                        <Text>
                        A lo largo de mi trayectoria, he tenido el placer de dar vida a varios proyectos innovadores que han desafiado mis habilidades y creatividad. Desde comercio electrónico hasta sistemas de gestión de bases de datos, cada proyecto me ha brindado la oportunidad de aprender y crecer como desarrollador.
                        </Text>
                        <Text>
                        Lo que más disfruto es trabajar en equipo, colaborar con otros apasionados de la tecnología y enfrentar desafíos juntos. Además, tengo predilección por el diseño, siempre buscando el equilibrio perfecto entre funcionalidad y estética en mis proyectos.
                        </Text>
                        <Text>
                        Con tan solo 
                        <span> 20 años</span>
                        , estoy decidido a seguir mejorando mis habilidades en backend y ampliar mi experiencia en desarrollo de software. Mi objetivo es convertirme en un desarrollador excepcional capaz de crear soluciones innovadoras que impacten positivamente la vida de las personas.
                        </Text>
                    </AboutMeContentStyled>
                    <AboutMeFigureStyled>
                        <ContianerImgStyled>
                            <img src={Profile} alt="" />
                        </ContianerImgStyled>
                    </AboutMeFigureStyled>
                </ContainerAboutMeStyled>
            </>)
        }
    </ContainerSectionStyled>
  )
}

export default AboutMeContainer