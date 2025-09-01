import React from "react";
import {
  AboutMeContentStyled,
  AboutMeFigureStyled,
  ContainerAboutMeStyled,
  ContainerSectionStyled,
  ContianerImgStyled,
} from "./AboutMeContainerStyled";
import { ContainerTitleSkillStyled } from "../SkillContainer/SkillContainerStyled";
import Text from "../Text/Text";
import Profile from "../../assets/profile.webp";
import { useTranslate } from "../../context/Translate";
import AboutProfile from "./AboutProfile";

const AboutMeContainer = () => {
  const { isTranslate } = useTranslate();
  return (
    <ContainerSectionStyled>
      {!isTranslate ? (
        <>
          <ContainerTitleSkillStyled>
            <span>About Me</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
          </ContainerTitleSkillStyled>
          <ContainerAboutMeStyled>
            <AboutMeContentStyled>
              <Text>
                I am <span>Computer Technician</span>,{" "}
                <span>web developer</span>, and <span>graphic designer</span>{" "}
                passionate about technology. I currently focus on{" "}
                <span>developing and selling systems</span>, such as{" "}
                <span>ERP</span> solutions and tools to{" "}
                <span>optimize workplaces</span>.
              </Text>
              <Text>
                At <span>21 years old</span>, my goal is to keep growing as a
                developer and provide{" "}
                <span>innovative solutions that improve productivity</span> and
                make a positive impact on people’s work.
              </Text>
            </AboutMeContentStyled>
            <AboutProfile img={Profile} />
          </ContainerAboutMeStyled>
        </>
      ) : (
        <>
          <ContainerTitleSkillStyled>
            <span>Sobre Mi</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
          </ContainerTitleSkillStyled>
          <ContainerAboutMeStyled>
            <AboutMeContentStyled>
              <Text>
                Soy <span>Técnico en Informática</span>,{" "}
                <span>desarrollador web</span> y <span>diseñador gráfico</span>{" "}
                apasionado por la tecnología. Actualmente me dedico al{" "}
                <span>desarrollo y venta de sistemas</span>, como{" "}
                <span>ERP</span> y herramientas para{" "}
                <span>agilizar el trabajo</span> en distintos entornos.
              </Text>
              <Text>
                Con <span>21 años</span>, mi objetivo es seguir creciendo como
                desarrollador y ofrecer{" "}
                <span>soluciones innovadoras que mejoren la productividad</span>{" "}
                e impacten de manera positiva en la vida laboral de las
                personas.
              </Text>
            </AboutMeContentStyled>
            <AboutMeFigureStyled>
              <ContianerImgStyled>
                <img src={Profile} alt="" />
              </ContianerImgStyled>
            </AboutMeFigureStyled>
          </ContainerAboutMeStyled>
        </>
      )}
    </ContainerSectionStyled>
  );
};

export default AboutMeContainer;
