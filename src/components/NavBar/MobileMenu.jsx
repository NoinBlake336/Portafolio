import React from "react";
import {
  ArticleMobileMenuStyled,
  ButtonMobileMenuStyled,
  ContainerMobileMenuStyled,
} from "./NavBarStyled";
import { useNavigate } from "react-router-dom";
import { useTranslate } from "../../context/Translate";

const MobileMenu = ({ isHidden }) => {
  const navigate = useNavigate();
  const { isTranslate } = useTranslate();
  return (
    <ArticleMobileMenuStyled isHidden={isHidden}>
      <ContainerMobileMenuStyled>
        {!isTranslate ? (
          <>
            <ButtonMobileMenuStyled onClick={() => navigate("/")}>
              <span>Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home icon"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </ButtonMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={() => {
              const el = document.getElementById("proyectos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/#proyectos");
            }}>
              <span>Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layout-dashboard icon"
              >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
            </ButtonMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={() => {
              const el = document.getElementById("trayectoria");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/#trayectoria");
            }}>
              <span>Services & Career</span>
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
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
            </ButtonMobileMenuStyled>
          </>
        ) : (
          <>
            <ButtonMobileMenuStyled onClick={() => navigate("/")}>
              <span>Inicio</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home icon"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </ButtonMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={() => {
              const el = document.getElementById("proyectos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/#proyectos");
            }}>
              <span>Proyectos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layout-dashboard icon"
              >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
            </ButtonMobileMenuStyled>
            <ButtonMobileMenuStyled onClick={() => {
              const el = document.getElementById("trayectoria");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else navigate("/#trayectoria");
            }}>
              <span>Trayectoria & Servicios</span>
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
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
            </ButtonMobileMenuStyled>
          </>
        )}
      </ContainerMobileMenuStyled>
    </ArticleMobileMenuStyled>
  );
};

export default MobileMenu;
