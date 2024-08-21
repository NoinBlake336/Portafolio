import styled from "styled-components";

export const ContainerP = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 80%;
        justify-content: center;
        display: flex;
        p {
            font-size: 1.000rem;
            font-weight: 500;
            color: var(--footer-content-color);
            line-height: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: .2rem;
            position: relative;
            min-height: 1rem;
            text-align: center;
            margin-bottom: .5rem;
            /* @media only screen and (max-width: 579px){
                display: none;
            } */
        }
        svg {
            color: var(--text-accent);
            width: 2rem;
        }
    }
`;

export const SectionCardsServicesStyled = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;

    @media (min-width: 320px){
        width: 100%;
        height: 1260px;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 617px){
        width: 100%;
        height: 820px;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1024px){
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
    }
`;

