import styled from "styled-components";

export const ContainerSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  padding: 6rem 1.5rem 5rem;
  position: relative;
`;

export const SectionPrincipalStyled = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 45rem;
  width: 100%;
  line-height: 1.2;
  .welcome {
    font-size: 1.025rem;
    font-weight: 500;
    color: var(--text-accent);
    line-height: 1.4;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    position: relative;
    min-height: 1rem;
  }

  .content {
    font-size: 3rem;
    font-weight: 700;
    color: var(--landing-message-color);
    span {
      color: var(--text-accent);
    }
    @media only screen and (max-width: 579px) {
      font-size: 2rem;
      font-weight: 700;
      color: var(--landing-message-color);
    }
  }

  .message {
    margin-top: 0.4rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--landing-message-color);
    width: 100%;
    max-width: 35rem;
    span {
      color: var(--text-accent);
      font-weight: 500;
    }
    @media only screen and (max-width: 579px) {
      margin-top: 0.4rem;
      font-size: 1rem;
      font-weight: 400;
      color: var(--landing-message-color);
      width: 100%;
      max-width: 35rem;
    }
  }
`;

export const ContainerButtonsStyled = styled.div`
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.65rem;
  width: 100%;

  @media (max-width: 579px) {
    a {
      flex: 1 1 calc(50% - 0.65rem);
    }
    a:first-child {
      flex-basis: 100%;
    }
  }
`;

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ $primary }) => ($primary ? "#000" : "var(--landing-message-color)")};
  padding: 0.5rem 1.35rem;
  background-color: ${({ $primary }) => ($primary ? "var(--text-accent)" : "var(--landing-action-background-color)")};
  border: 0.1rem solid var(--landing-action-color);
  border-radius: 50px;
  min-height: 2.35rem;
  font-weight: ${({ $primary }) => ($primary ? "600" : "400")};
  transition: all 0.25s ease;
  box-shadow: ${({ $primary }) => ($primary ? "0 4px 18px rgba(254, 236, 182, 0.35)" : "none")};

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ $primary }) => ($primary ? "#fff" : "rgba(254, 236, 182, 0.25)")};
    box-shadow: 0 6px 20px rgba(254, 236, 182, 0.3);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  span {
    font-size: 0.95rem;
  }
`;

export const ContainerIconDownStyled = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    animation: iconDown 1.25s infinite;
  }

  @keyframes iconDown {
    0% {
      transform: translateY(-0.5rem);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(0.5rem);
      opacity: 0;
    }
  }
`;
