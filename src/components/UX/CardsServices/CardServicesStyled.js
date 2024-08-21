import styled from "styled-components";

export const CardContainerService = styled.div`
    width: 300px;
    height: 400px;
    background-color: var(--header-action-background-color);
    border: .15rem solid var(--header-action-color);
    border-radius: .5rem;
    padding: 0 .45rem;
    color: var(--header-action-text-color);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    grid-template-rows: 15% 5% 16% 45% 19%;
`

export const ContainerTitle = styled.p`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    `
export const DescriptionContainer = styled.p`
    color: #766d6d;
    font-size: .9rem;
    font-weight: 600;
    text-align: center;
`

export const LimitText = styled.div`
    width: 90%;
    position: relative;
    border-bottom: 1px solid #766d6d;
    display: flex;
    align-items: center;
    justify-content: start;
    p{
        font-size: .75rem;
        position: absolute;
        top:-.6rem;

        background-color: var(--text-accent-2);
        padding: .2rem;
        border-radius: .5rem;
    }
`

export const ListContaints = styled.ul`
    list-style: none;
    padding-left: 0;
    li{
        margin: 8px 0;
        display: flex;
        align-items: center;
        gap: .8rem;
        svg{
            width: 1.2rem;
        }
        color: white;
    }
`

export const ContainerButtonView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-bottom: 2rem;
`;

export const ButtonView = styled.a`
    background-color: white ;
    text-decoration: none;
    width: 90%;
    height: 2rem;
    color: var(--text-accent);
    border-radius: .5rem;
    transition: all .5s ease;
    text-align: center;
    padding-top: .2rem;
    &:hover{
        color: white;
        background-color: var(--text-accent) ;
    }
`;