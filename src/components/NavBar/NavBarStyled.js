import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  transition: padding 0.25s ease;
  -webkit-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  border-bottom: 0.1rem solid var(--header-border-color);
  @media (max-width: 1040px) {
    padding: 0 1.5rem;
  }
`;

export const ContainerLogoStyled = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const LogoStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h1 {
    font-size: 1.3rem;
    font-family: var(--font-rubik), sans-serif;
    font-weight: 600;
    color: var(--text-primary);
    span {
      color: var(--text-accent);
      font-family: var(--font-rubik);
    }
  }
`;

export const NavigateContainerStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const ItemsStyled = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.185rem;
  cursor: pointer;
  color: var(--header-link-color);
  transition: color 0.15s ease;
  span {
    font-size: 0.95rem;
    font-weight: 500;
    font-family: var(--font-rubik);
  }
`;

export const ContainerItemsStyled = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemsNavbarStyled = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: var(--header-link-color);
    transition: color 0.15s ease;
  }

  svg:hover {
    color: var(--text-accent);
  }
`;

export const ItemNavBarStyledTranslate = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: ${({ selectedColor }) =>
      selectedColor ? "var(--text-accent);" : "var(--header-link-color);"};
    transition: color 0.15s ease;
  }
`;

export const MobileMenuStyled = styled.div`
  margin-left: 1rem;
  position: relative;
  display: none;
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

export const ButtonMenuStyled = styled.button`
  padding: 0.35rem;
  background-color: var(--landing-action-background-color);
  border: 0.15rem solid var(--landing-action-color);
  border-radius: 0.5rem;
  padding: 0.45rem;
  color: var(--landing-action-text-color);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  svg {
    color: var(--header-action-text-color);
  }
  @media (max-width: 780px) {
    display: flex;
  }
`;

export const ArticleMobileMenuStyled = styled.article`
  opacity: ${({ isHidden }) => (isHidden ? 1 : 0)};
  transform: ${({ isHidden }) =>
    isHidden ? "translateX(0px)" : "translateX(200px)"};
  gap: 1rem;
  position: absolute;
  top: 2.7rem;
  right: 0;
  width: 14rem;
  background-color: var(--text-accent);
  border: 0.1rem solid var(--landing-action-background-color);
  border-radius: 0.5rem;
  transform-origin: top right;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1) 0s,
    opacity 0.25s ease 0s;
`;

export const ContainerMobileMenuStyled = styled.div`
  width: 100%;
  gap: 0.25rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonMobileMenuStyled = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: var(--landing-action-background-color);
  border: 0.1rem solid var(--landing-action-color);
  width: 100%;
  border-radius: 0.25rem;
  gap: 0.2rem;
  padding: 0.5rem 1rem;
  height: 2.1rem;
  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    line-height: 0;
    /* text-wrap: balance; */
    margin-top: 0.2rem;
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
    color: #fff;
  }
`;
