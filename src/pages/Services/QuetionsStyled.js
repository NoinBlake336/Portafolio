import styled from "styled-components";

export const ContainerInputsStyled = styled.section`
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;
    margin-bottom: 1.3rem;
    `;

export const InputsStyled = styled.div`
    width: 80%;
    background-color: var(--header-action-background-color);
    border: .15rem solid var(--header-action-color);
    border-radius: .5rem;
    padding: 0 .45rem;
    color: var(--header-action-text-color);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ButtonSendStyled = styled.button`
    background-color: white ;
    text-decoration: none;
    width: 90%;
    height: 2rem;
    color: var(--text-accent);
    border-radius: .5rem;
    transition: all .5s ease;
    text-align: center;
    font-size: 1rem;
    grid-area: 7 / 2;
    &:hover{
        color: white;
        background-color: var(--text-accent) ;
    }
`;