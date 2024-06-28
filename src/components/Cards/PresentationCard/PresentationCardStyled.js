import { styled } from "styled-components";

export const ContainerPresentationCard = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    `;

export const CardContainerStyed = styled.div`
    border-radius: 0.75rem;
    margin-top: 2rem;
    width: 80%;
    max-height: 80%;
    background-color: var(--header-action-background-color);
    border: var(--text-accent) solid .15rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 1rem;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 5% 47.5% 47.5%;
        max-width: 100%;
        height: 550px;
    }


`;

export const ItemsContianerStyled = styled.ul` 
    width: 100%;
    height: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style: none;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`;

export const ItemsStyled = styled.li`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: white;
    border:var(--text-accent) solid .15rem;
`;

export const ContiainerImgStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;


export const ContainerButtonSkill = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    transform: rotate(3deg);
`;

export const ButtonSkill = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: var(--header-action-background-color);
    border: solid .15rem var(--text-accent);
    border-radius: 1rem;

    img {
        width: 100%;
        border-radius: 100%;
        padding: .1rem;
    }
`;

export const PageInfromatinContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-right: 2rem;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-accent);
        border-radius: 20px;
        border: 3px solid transparent;
    }
`;

