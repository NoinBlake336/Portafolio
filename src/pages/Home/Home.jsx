import React from "react";
import {
  ButtonStyled,
  ContainerButtonsStyled,
  ContainerIconDownStyled,
  ContainerSectionStyled,
  SectionPrincipalStyled,
} from "./HomeStyled";
import Circle from "../../components/Animations/Circle/Circle";
import AboutMeContainer from "../../components/AboutMeContainer/AboutMeContainer";
import { useTranslate } from "../../context/Translate";
import Projects from "../Projects/Projects";
import { BsWhatsapp } from "react-icons/bs";
import { whatsappUrl, defaultWhatsappText } from "../../utils/whatsapp";

const Home = () => {
  const { isTranslate } = useTranslate();
  return (
    <main>
      <Circle />
      <div>
        <ContainerSectionStyled>
          <SectionPrincipalStyled>
            {!isTranslate ? (
              <>
                <p className="welcome" id="welcome">
                  ✦ Professional Software Engineering & Consulting
                </p>
                <h1 className="content">
                  José <span className="resalted">Chocobar</span>
                </h1>
                <p className="message">
                  With <span className="resalted">+6 years of experience</span>, I engineer business-critical <span className="resalted">ERP management systems</span>, electronic invoicing compliant with <span className="resalted">ARCA (AFIP)</span>, and <span className="resalted">custom web & mobile applications</span>. High-impact software solutions designed to streamline business workflows, sales, purchases, and real-time inventory.
                </p>
                <ContainerButtonsStyled>
                  <ButtonStyled
                    $primary
                    href={whatsappUrl(defaultWhatsappText(isTranslate))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsWhatsapp />
                    <span className="text">Request a Consultation</span>
                  </ButtonStyled>
                  <ButtonStyled href="#proyectos">
                    <span className="text">Explore Solutions</span>
                  </ButtonStyled>
                  <ButtonStyled href="mailto:josechocobar336@gmail.com">
                    <span className="text">Contact</span>
                  </ButtonStyled>
                  <ButtonStyled href="https://github.com/NoinBlake336" target="_blank" rel="noreferrer">
                    <span className="text">GitHub</span>
                  </ButtonStyled>
                </ContainerButtonsStyled>
              </>
            ) : (
              <>
                <p className="welcome" id="welcome">
                  ✦ Consultoría & Desarrollo de Software Profesional
                </p>
                <h1 className="content">
                  José <span className="resalted">Chocobar</span>
                </h1>
                <p className="message">
                  Con <span className="resalted">+6 años de experiencia</span>, diseño y desarrollo <span className="resalted">sistemas ERP empresariales</span>, facturación electrónica conectada con <span className="resalted">ARCA (AFIP)</span>, y <span className="resalted">aplicaciones web y móviles a medida</span>. Soluciones escalables orientadas a optimizar operaciones, compras, ventas y control de stock para empresas y comercios.
                </p>
                <ContainerButtonsStyled>
                  <ButtonStyled
                    $primary
                    href={whatsappUrl(defaultWhatsappText(isTranslate))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsWhatsapp />
                    <span className="text">Cotizar Proyecto / Servicios</span>
                  </ButtonStyled>
                  <ButtonStyled href="#proyectos">
                    <span className="text">Ver Sistemas & Soluciones</span>
                  </ButtonStyled>
                  <ButtonStyled href="mailto:josechocobar336@gmail.com">
                    <span className="text">Contacto</span>
                  </ButtonStyled>
                  <ButtonStyled href="https://github.com/NoinBlake336" target="_blank" rel="noreferrer">
                    <span className="text">GitHub</span>
                  </ButtonStyled>
                </ContainerButtonsStyled>
              </>
            )}
          </SectionPrincipalStyled>
          <ContainerIconDownStyled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M18 13l-6 6"></path>
              <path d="M6 13l6 6"></path>
            </svg>
          </ContainerIconDownStyled>
        </ContainerSectionStyled>
        <Projects />
        <AboutMeContainer />
      </div>
    </main>
  );
};

export default Home;
