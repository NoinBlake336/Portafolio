import styled from "styled-components";

export const ContainerSectionStyled = styled.section`
  display: flex;
  align-items: center;
  margin-top: 5.6rem;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.65rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0 2rem;
  margin-bottom: 5.6rem;
`;

export const ContainerAboutMeStyled = styled.div`
  margin-top: 3rem;
  flex-direction: row;
  width: 100%;
  max-width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 4rem;
  }
`;

export const AboutMeContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;
  max-width: 37rem;
  line-height: 1.1;
  @media screen and (max-width: 1080px) {
    max-width: 28rem;
  }
`;

export const AboutMeFigureStyled = styled.figure`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`;

export const ContianerImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: var(--landing-action-background-color);
  border: 0.1rem solid var(--text-accent);
  object-fit: cover;
  border-radius: 1rem;
  transform: rotate(3deg);
  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
`;
