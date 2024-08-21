import styled from "styled-components";

export const ContainerButtonWpp = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;
`;

export const ButtonWpp = styled.a`
    width: 300px;
    height: 80%;
    background-color: var(--header-action-background-color);
    border: .15rem solid var(--header-action-color);
    border-radius: 0.5rem;
    justify-self: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    cursor: pointer;
    gap: 1rem;
    text-decoration: none;
    p {
        font-size: 1.5rem;

    }
`;