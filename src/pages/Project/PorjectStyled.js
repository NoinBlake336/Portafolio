import styled from "styled-components";

export const SectionContainerProjectStyled = styled.section`
  width: 80%;
  max-height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: var(--text-accents);
  padding: 1rem;
  border-radius: 0.15rem;

  @media (min-width: 1280px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 640px) {
    max-width: 640px;
  }
`;

export const ContainerImgStyled = styled.header`
  max-width: 800px;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    margin-top: 7rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }

  img {
    background-color: ${({ bg }) => (bg ? bg : "transparent")};
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
    max-width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
    box-shadow: 1px 0px 23px 2px var(--landing-action-background-color);
    @media (min-width: 1024px) {
      margin-bottom: 2rem;
    }
  }
`;

export const ContainerProjectAboutStyled = styled.div`
  h1 {
    --tw-text-opacity: 1;
    color: var(--text-accent);
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    /* font-size: inherit; */
    /* font-weight: inherit; */
    @media (min-width: 1024px) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1024px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const ContainerListOfSkillStyled = styled.ul`
  align-items: flex-start;
  list-style-type: none;
  margin-bottom: 1rem;
  list-style: none;
  @media (min-width: 768px) {
    gap: 2rem;
    display: flex;
  }
`;

export const SkillProjectStyled = styled.li`
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 0.25rem;
  align-items: flex-start;
  min-width: fit-content;
  display: flex;

  svg {
    --tw-text-opacity: 1;
    color: var(--text-accent);
    width: 1rem;
    height: 1rem;
    display: block;
    vertical-align: middle;
  }
  p {
    gap: 0.25rem;
    flex-wrap: wrap;
    display: flex;
  }
`;

export const ContainerPageLinkStyled = styled.div`
  gap: 0.5rem;
  display: flex;
  a {
    --tw-text-opacity: 1;
    color: var(--text-accent);
    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    font-weight: 700;
    gap: 0.25rem;
    align-items: center;
    display: flex;
    text-decoration: inherit;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const ContainerBlockquoteStyled = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`;

export const BlockquoteStyled = styled.blockquote`
  border-left: 5px solid hsla(0, 0%, 100%, 0.178);
  padding-left: 1.5em;
  --tw-opacity: 1;
  color: rgb(226 232 240 / var(--tw-opacity));
  background-color: var(--landing-action-background-color);
  text-wrap: pretty;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 3rem;
`;
