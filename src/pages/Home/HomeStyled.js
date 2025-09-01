import styled from "styled-components";

export const ContainerSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  padding: 0 1.5rem;
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
    line-height: 0.8rem;
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
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--landing-message-color);
  padding: 0.4rem 1.3rem;
  background-color: var(--landing-action-background-color);
  border: 0.1rem solid var(--landing-action-color);
  border-radius: 50px;
  min-height: 2.25rem;
  svg {
    width: 1.325rem;
    height: 1.325rem;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
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
